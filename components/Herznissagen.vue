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
            <div class="herz-herznissagen__faq col-span-full pb-18">
                <h2 class="font-din text-5xl">Was du wissen solltest:</h2>
                <div class="grid lg:grid-cols-2 gap-4 mt-6">
                    <Question title="Was passiert an einer Lesung?">
                        <p>
                            Die Moderation wird sich mit mir auf der Bühne über das Buch unterhalten und
                            dazwischen lese ich vor. Am Schluss dieser Lesung kannst du das Buch kaufen und/oder
                            mir Hoi sagen. Ich schreibe dir auch gerne was Liebes in dein Buch (oder in deine
                            Agenda, deine Formelsammlung oder auf deinen Rucksack, alles schon vorgekommen).
                        </p>
                    </Question>
                    <Question title="Muss ich deine Bücher gelesen haben, um an die Lesung zu kommen?">
                        <p>
                            Die Lesung dauert etwa eine Stunde. Danach gibt es eine Signierstunde, in der ich
                            dir gerne ein paar Worte in dein Buch schreibe. Wenn du kein Buch hast, kannst du
                            auch ein Post-it von mir bekommen. Oder ein Herz. Oder ein Lächeln. Oder ein Hoi.
                        </p>
                    </Question>
                    <Question title="Wo kann ich dein Buch bestellen?">
                        <p>
                            Du kannst es <a href="https://rotpunktverlag.ch/buecher/herz" target="_blank"
                                class="underline">hier</a> vorbestellen,
                            dann hast du es sicher vor der Vernissage. Oder
                            du kannst es an der Vernissage kaufen.
                        </p>
                    </Question>
                    <Question title="Welche Themen werden vorkommen?">
                        <p> Die Kapitel meines Buches drehen sich um: </p>
                        <ol class="list-decimal pl-12 my-2">
                            <li>Queere Identitäten und Sex</li>
                            <li>Geschlechtsspezifische Gewalt</li>
                            <li>Wut</li>
                            <li>Raum einnehmen</li>
                            <li>Hoffnung.</li>
                        </ol>
                        <p>
                            Das heisst, dass alle diese Themen vorkommen können. Wenn du während der Lesung merkst, dass
                            dir das zu viel ist, kannst du den Raum jederzeit verlassen, ich nehme dir das nicht übel.
                        </p>
                    </Question>
                    <Question title="Darf ich dir an der Lesung hoi sagen?">
                        <p>
                            Ja, mega gerne! Am Ende der Lesungen sitze ich jeweils am Tisch, wo meine Bücher verkauft
                            werden. Erfahrungsgemäss bildet sich jeweils eine Schlange und es dauert ein wenig, bis du
                            drankommst, aber ich freue mich auf jedes einzelne Gegenüber und tausche immer gern ein paar
                            Worte aus. Du kannst selbstverständlich auch nur Hoi sagen und nichts kaufen.
                        </p>
                    </Question>
                    <Question title="Und was gibt es zu kaufen?">
                        <p>
                            Einerseits meine zwei Bücher, «Rosa Buch» und «Herz». Wenn du willst, schreibe ich dir sogar
                            was Liebes rein (ich werde dich dann nach deinem Namen oder nach dem Namen der beschenkten
                            Person fragen). Ausserdem gibt es neue Ansteck-Pins und Sticker zu kaufen (an denen verdiene
                            ich übrigens kein Geld, ich verkaufe sie einfach zum Produktionspreis).
                        </p>
                    </Question>
                    <Question class="col-span-full" title="Was, wenn ich pleite bin?">
                        <p>
                            Wenn du gerne an die Herznissage kommen willst, aber der Preis dafür (oder die Kosten der
                            Hin- und Rückreise) für dein Portemonnaie gerade viel ist, schreib mir auf
                            anna@rosenwasser.ch. Du musst mir nichts beweisen, wir kriegen das zusammen unkompliziert
                            hin.
                        </p>
                        <p> Ausserdem wird der Anlass in Bern per Livestream übertragen, der ist gratis. </p>
                        <p> Das Best-Of meines «Rosa Buchs» findest du übrigens kostenlos auf YouTube! </p>
                    </Question>
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