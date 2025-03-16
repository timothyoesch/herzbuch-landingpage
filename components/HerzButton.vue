<script setup>
import { ArrowLongRightIcon, ChevronRightIcon, ChevronDownIcon } from '@heroicons/vue/16/solid';
import {onMounted} from 'vue';
const props = defineProps({
    href: String,
    icon: String,
    target: String,
    eventCategory: String,
    eventAction: String,
    eventName: String
});

const trackEvent = () => {
    const tracker = {
        eventCategory: props.eventCategory || 'Button',
        eventAction: props.eventAction || 'click',
        eventName: props.eventName || props.href
    }
    window._paq.push(['trackEvent', tracker.eventCategory, tracker.eventAction, tracker.eventName]);
}
</script>

<template>
    <a
        class="herz-button border-blau flex justify-center"
        :href="props.href"
        :target="props.target"
        v-on:click="trackEvent"
    >
        <slot></slot>
        <ArrowLongRightIcon class="h-8 lg:h-6" v-if="props.icon == 'arrow-right'"/>
        <ChevronRightIcon class="h-8 lg:h-6" v-if="props.icon == 'chevron-right'"/>
        <ChevronDownIcon class="h-8 lg:h-6" v-if="props.icon == 'chevron-down'"/>
    </a>
</template>

<style scoped lang="scss">
    a {
        font-family: "DIN Pro";
        display: flex;
        gap: 0.5rem;
        border-radius: 90000px;
        padding: 0.5em 1em;
        border: 1px solid;
        border-bottom: 5px solid;
        justify-content: center;

        @media (width <= 64rem) {
            font-size: 1.5rem;
        }
    }
</style>