<script setup>

const props = defineProps({
    event: Object,
});

const event = ref(props.event);

</script>
<template>
    <div class="herz-event py-16 lg:py-10">
        <p class="herz-event__details italic text-2xl">{{ event.date }}, {{ event.time }} | {{ event.location }}</p>
        <div class="herz-event__titles mt-0">
            <h3 class="font-din text-4xl">{{ event.name }}</h3>
            <h4 v-if="event.subtitle" class="text-2xl italic mt-2">{{ event.subtitle }}</h4>
        </div>
        <div class="herz-event__links grid lg:grid-cols-2 gap-2 lg:w-fit mt-6">
            <HerzButton class="!w-full lg:w-fit" v-for="link in event.links" icon="chevron-right" :key="link.href" :href="link.href" target="_blank">{{link.name}}</HerzButton>
        </div>
    </div>
</template>