<script setup>
import { ChevronDownIcon } from '@heroicons/vue/16/solid'
import { ref, onMounted } from 'vue'

const weiterlesen = ref(false)
let open = false
const blind = ref(false)

const toggleWeiterlesen = () => {
    let blindDOM = blind.value
    let currentHeight = "23rem";
    let weiterlesenDOM = weiterlesen.value
    let icon = weiterlesenDOM.querySelector('svg')
    let text = weiterlesenDOM.querySelector('span')
    if (!open) {
        blindDOM.animate([
            {
                maxHeight: `${currentHeight}px`,
                maskImage: '-webkit-gradient(linear, left 70%, left 90%, from(rgba(0,0,0,1)), to(rgba(0,0,0,0))',
                offSet: 0
            },
            {
                maxHeight: `${blindDOM.scrollHeight}px`,
                maskImage: 'unset',
                offSet: 0.99
            },
            {
                maxHeight: `unset`,
                maskImage: 'unset',
                offSet: 1
            }
        ], {
            duration: 200,
            fill: 'forwards'
        })

        icon.animate([
            {
                transform: 'rotate(0deg)'
            },
            {
                transform: 'rotate(180deg)'
            }
        ], {
            duration: 200,
            fill: 'forwards'
        })

        text.innerText = "Weniger lesen"

        open = true
    } else {
        blindDOM.animate([
            {
                maxHeight: `${blindDOM.scrollHeight}px`,
                maskImage: 'unset',
                offSet: 0
            },
            {
                maxHeight: `${currentHeight}px`,
                maskImage: '-webkit-gradient(linear, left 70%, left 90%, from(rgba(0,0,0,1)), to(rgba(0,0,0,0))',
                offSet: 0.99
            },
            {
                maxHeight: `24rem`,
                maskImage: '-webkit-gradient(linear, left 70%, left 90%, from(rgba(0,0,0,1)), to(rgba(0,0,0,0))',
                offSet: 1
            }
        ], {
            duration: 200,
            fill: 'forwards'
        })

        icon.animate([
            {
                transform: 'rotate(180deg)'
            },
            {
                transform: 'rotate(0deg)'
            }
        ], {
            duration: 200,
            fill: 'forwards'
        })

        text.innerText = "Weiterlesen"

        open = false
    }
}

</script>
<template>
    <div class="herz-container herz-grid-template">
        <div class="herz-intro col-span-6 lg:col-span-3 text-2xl relative">
            <div class="herz-intro__blind max-h-82 overflow-hidden" ref="blind">
                <p>
                    Wir alle können Hoffnung gut gebrauchen – aber ohne eine Auseinandersetzung mit dem, was uns wütend macht, geht das nicht. Anna Rosenwasser widmet sich in Herz. Feministische Strategien und queere Hoffnung den Fragen, die ihr als Aktivistin häufig gestellt werden: Wie können wir uns mit der Realität von Gewalt beschäftigen, ohne unsere Zuversicht zu verlieren? Wohin mit unserer Wut, die bei problematischen Diskussionen aufkommt? Warum fällt es vielen Frauen und Queers so schwer, Raum einzunehmen – und mit welchen Tricks schaffen wir es trotzdem?
                </p>
                <p class="pb-4">
                    Die Texte beschreiben heutige Realitäten von Frauen und queeren Menschen mit Einfühlsamkeit und Humor. Sie öffnen Perspektiven, beleuchten allzu oft Missverstandenes und ermutigen, nicht alleine zu verzweifeln, sondern gemeinsam fantasievollen Widerstand zu leisten. Nicht zuletzt gewährt das Buch persönliche Einblicke in die Lebens- und Gedankenwelt einer jungen Nationalrätin.
                </p>
            </div>
            <span class="flex herz-intro__weiterlesen items-center gap-2 text-herz cursor-pointer" ref="weiterlesen" @click="toggleWeiterlesen">
                <span>Weiterlesen</span>
                <ChevronDownIcon class="w-6 h-6" />
            </span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.herz-intro__blind {
    mask-image: -webkit-gradient(linear, left 70%, left 90%, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));
}
</style>