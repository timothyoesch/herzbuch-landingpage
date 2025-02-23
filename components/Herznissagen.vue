<script setup>
import { ref } from 'vue';
import data from "~/data/events.json";

const events = ref(data);

</script>
<template>
    <div class="bg-rosa mt-64 lg:mt-32 py-0 relative z-50" id="herznissagen">
        <div class="herz-herznissagen herz-container herz-grid-template-double">
            <div class="herz-herznissagen__text col-span-full lg:col-span-5 -mb-28 lg:-my-0">
                <HerzText class="fill-blau lg:sticky lg:top-0">
                    Herznissagen mit Anna Rosenwasser in Bern, Zürich, Luzern und Basel
                </HerzText>
            </div>
            <div class="herz-herznissagen__events col-span-full lg:col-span-7 py-18">
                <h1 class="font-din text-7xl"><em>Herz</em> zum ersten Mal in deiner Stadt</h1>
                <div class="herz-herznissagen__events__list mt-4">
                    <HerzEvent v-for="event in events" :key="event.id" :event="event" />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">

.herz-event + .herz-event {
    border-top: 6px solid #2B3C69;
}

.herz-event:last-child {
    padding-bottom: 0;
}

</style>