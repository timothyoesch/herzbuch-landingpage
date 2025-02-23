<template>
    <div class="herz-container herz-grid-template mt-24 lg:mt-[-8rem]">
        <div class="herz-about lg:col-span-4 lg:col-start-3 col-span-6">
            <div class="herz-about__image--desktop col-span-1 lg:items-end hidden lg:flex">
                <div class="-mb-4">
                    <picture>
                    <source
                        type="image/avif"
                        srcset="public/images/AnnaRosenwasser24_136-100.avif?width=100 100w, public/images/AnnaRosenwasser24_136-200.avif?width=200 200w, public/images/AnnaRosenwasser24_136-400.avif?width=400 400w, public/images/AnnaRosenwasser24_136-800.avif?width=800 800w" />
                    <source
                        type="image/webp"
                        srcset="public/images/AnnaRosenwasser24_136-100.webp?width=100 100w, public/images/AnnaRosenwasser24_136-200.webp?width=200 200w, public/images/AnnaRosenwasser24_136-400.webp?width=400 400w, public/images/AnnaRosenwasser24_136-800.webp?width=800 800w" />
                    <img
                        src="public/images/AnnaRosenwasser24_136.jpg"
                        srcset="public/images/AnnaRosenwasser24_136-100.jpg?width=100 100w, public/images/AnnaRosenwasser24_136-200.jpg?width=200 200w, public/images/AnnaRosenwasser24_136-400.jpg?width=400 400w, public/images/AnnaRosenwasser24_136-800.jpg?width=800 800w"
                        sizes="(max-width: 800px) 100vw, 50vw"
                        style="width: 100%; aspect-ratio: 1"
                        loading="lazy"
                        decoding="async"
                        alt="Porträt von Anna Rosenwasser"
                        class="rounded-sm overflow-hidden"
                    />
                    </picture>
                    <p class="opacity-50 text-xs mt-2"><em>© <a href="https://www.leareutimann.ch/" target="_blank" class="underline">Lea Reutimann</a>, 2024</em></p>
                </div>
            </div>
            <div class="herz about__text col-span-3 lg:col-span-2 text-2xl">
                <p><em>Anna Rosenwasser,</em> 1990 in Schaffhausen geboren, arbeitet seit 2008 als Journalistin und Schriftstellerin und hat eine eigene Kolumne in der Republik. Von 2017 bis 2020 war sie Geschäftsführerin der Lesbenorganisation Schweiz und setzte sich unter anderem für den Diskriminierungsschutz und die Ehe für alle ein. Davor war Rosenwasser im Vorstand der LGBTQ-Organisation Milchjugend aktiv und hat in Schaffhausen einen queeren Jugendtreff mitgegründet. Ihr Instagram-Kanal gehört zu den meistbeachteten Politkanälen der Schweiz. 2023 wurde sie in den Nationalrat gewählt.</p>
            </div>
            <div class="herz-about__image--mobile col-span-3 max-w-[250px] mx-auto flex lg:items-end lg:hidden">
                <div class="-mb-4">
                    <picture>
                    <source
                        type="image/avif"
                        srcset="public/images/AnnaRosenwasser24_136-100.avif?width=100 100w, public/images/AnnaRosenwasser24_136-200.avif?width=200 200w, public/images/AnnaRosenwasser24_136-400.avif?width=400 400w, public/images/AnnaRosenwasser24_136-800.avif?width=800 800w" />
                    <source
                        type="image/webp"
                        srcset="public/images/AnnaRosenwasser24_136-100.webp?width=100 100w, public/images/AnnaRosenwasser24_136-200.webp?width=200 200w, public/images/AnnaRosenwasser24_136-400.webp?width=400 400w, public/images/AnnaRosenwasser24_136-800.webp?width=800 800w" />
                    <img
                        src="public/images/AnnaRosenwasser24_136.jpg"
                        srcset="public/images/AnnaRosenwasser24_136-100.jpg?width=100 100w, public/images/AnnaRosenwasser24_136-200.jpg?width=200 200w, public/images/AnnaRosenwasser24_136-400.jpg?width=400 400w, public/images/AnnaRosenwasser24_136-800.jpg?width=800 800w"
                        sizes="(max-width: 800px) 100vw, 50vw"
                        style="width: 100%; aspect-ratio: 1"
                        loading="lazy"
                        decoding="async"
                        alt="Porträt von Anna Rosenwasser"
                        class="rounded-sm overflow-hidden"
                    />
                    </picture>
                    <p class="opacity-50 text-xs mt-2"><em>© <a href="https://www.leareutimann.ch/" target="_blank" class="underline">Lea Reutimann</a>, 2024</em></p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.herz-about {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
}
</style>