<script setup>
import {ChevronDownIcon} from "@heroicons/vue/20/solid";
import { ref, onMounted } from "vue";
const props = defineProps(["title"]);

const button = ref(null);
var open = false;

const tracker = {
    category: "Button",
    action: "FAQ toggle",
    name: props.title
}

onMounted(() => {
    const buttonEl = button.value;

    buttonEl.addEventListener("click", () => {
        const content = buttonEl.parentElement.querySelector(".herz-question__content");
        const contentInner = content.querySelector(".herz-question__content__inner");
        const icon = buttonEl.querySelector("svg");

        if (!open) {
            content.animate(
                [
                    {maxHeight: "0", offset: 0},
                    {maxHeight: content.scrollHeight + "px", offset: 0.99},
                    {maxHeight: "none", offset: 1},
                ],
                {
                    duration: 300,
                    fill: "forwards",
                    easing: "ease-in-out",
                }
            )
            icon.animate(
                [
                    {transform: "rotate(0deg)"},
                    {transform: "rotate(180deg)"},
                ],
                {
                    duration: 300,
                    fill: "forwards",
                    easing: "ease-in-out",
                }
            )

            setTimeout(() => {
                contentInner.animate(
                    [
                        {opacity: "0", transform: "translateY(1rem)", offset: 0},
                        {opacity: "1", transform: "translateY(0)", offset: 1},
                    ],
                    {
                        duration: 300,
                        fill: "forwards",
                        easing: "ease-in-out",
                    }
                )
            }, 300);

            tracker.name = "open " + props.title;
        } else {
            content.animate(
                [
                    {maxHeight: content.scrollHeight + "px", offset: 0},
                    {maxHeight: "0", offset: 0.99},
                ],
                {
                    duration: 300,
                    fill: "forwards",
                    easing: "ease-in-out",
                }
            )
            icon.animate(
                [
                    {transform: "rotate(180deg)"},
                    {transform: "rotate(0deg)"},
                ],
                {
                    duration: 300,
                    fill: "forwards",
                    easing: "ease-in-out",
                }
            )
            contentInner.animate(
                [
                    {opacity: "1", transform: "translateY(0)", offset: 0},
                    {opacity: "0", transform: "translateY(1rem)", offset: 1},
                ],
                {
                    duration: 300,
                    fill: "forwards",
                    easing: "ease-in-out",
                }
            )

            tracker.name = "close " + props.title;
        }

        open = !open;
        window._paq.push(["trackEvent", tracker.category, tracker.action, tracker.name]);
    });
});

</script>

<template>
    <div class="herz-question rounded-sm border border-blau bg-blau/10 h-fit">
        <div class="herz-question__title font-din text-2xl lg:text-3xl flex justify-between items-center cursor-pointer"
            ref="button">
            <div class="herz-question__title__container flex-1">{{ props.title }}</div>
            <ChevronDownIcon class="w-8" />
        </div>
        <div class="herz-question__content text-xl max-h-0 overflow-hidden">
            <div class="herz-question__content__inner pt-4 opacity-0">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.herz-question {
    padding: 1rem;

    &__title {
        line-height: 0.85;
    }
}
</style>