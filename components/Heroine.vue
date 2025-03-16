<template>
    <div class="herz-heroine bg-herz py-12 md:py-18 mb-12">
        <div class="herz-grid-template herz-container items-center !gap-y-2">
            <div class="herz-heroine__image--mobile col-span-6 lg:hidden max-w-[450px] mx-auto">
                <picture>
                <source
                    type="image/avif"
                    srcset="public/images/Book_Mockup-100.avif?width=100 100w, public/images/Book_Mockup-200.avif?width=200 200w, public/images/Book_Mockup-400.avif?width=400 400w, public/images/Book_Mockup-800.avif?width=800 800w" />
                <source
                    type="image/webp"
                    srcset="public/images/Book_Mockup-100.webp?width=100 100w, public/images/Book_Mockup-200.webp?width=200 200w, public/images/Book_Mockup-400.webp?width=400 400w, public/images/Book_Mockup-800.webp?width=800 800w" />
                <img
                    src="public/images/Book_Mockup.png"
                    srcset="public/images/Book_Mockup-100.png?width=100 100w, public/images/Book_Mockup-200.png?width=200 200w, public/images/Book_Mockup-400.png?width=400 400w, public/images/Book_Mockup-800.png?width=800 800w"
                    sizes="(max-width: 800px) 100vw, 50vw"
                    style="width: 100%; aspect-ratio: 1.25"
                    loading="lazy"
                    decoding="async"
                    alt="Vorschaubild von «Herz. Feministische Strategien und queere Hoffnung.»"
                />
                </picture>
            </div>
            <div class="herz-heroine__lead col-span-6 lg:col-span-3">
                <h1 class="font-din text-blau leading-minimum">Herz.</h1>
                <h2 class="text-4xl !leading-line mt-4">Feministische Strategien<br>und queere Hoffnung.</h2>
                <div class="grid lg:grid-cols-2 lg:w-fit gap-x-4 gap-y-2 mt-8">
                    <HerzButton
                        class="!w-full lg:w-fit"
                        href="https://rotpunktverlag.ch/buecher/herz"
                        icon="arrow-right" target="_blank"
                    >
                        Buch bestellen
                    </HerzButton>
                    <HerzButton
                        class="!w-full lg:w-fit"
                        href="/#herznissagen"
                        icon="chevron-down"
                    >
                        Vernissagen
                    </HerzButton>
                </div>
            </div>
            <div class="herz-heroine__image--desktop col-span-3 mt-12 mb-[-12rem] hidden lg:block">
                <picture>
                <source
                    type="image/avif"
                    srcset="public/images/Book_Mockup-100.avif?width=100 100w, public/images/Book_Mockup-200.avif?width=200 200w, public/images/Book_Mockup-400.avif?width=400 400w, public/images/Book_Mockup-800.avif?width=800 800w" />
                <source
                    type="image/webp"
                    srcset="public/images/Book_Mockup-100.webp?width=100 100w, public/images/Book_Mockup-200.webp?width=200 200w, public/images/Book_Mockup-400.webp?width=400 400w, public/images/Book_Mockup-800.webp?width=800 800w" />
                <img
                    src="public/images/Book_Mockup.png"
                    srcset="public/images/Book_Mockup-100.png?width=100 100w, public/images/Book_Mockup-200.png?width=200 200w, public/images/Book_Mockup-400.png?width=400 400w, public/images/Book_Mockup-800.png?width=800 800w"
                    sizes="(max-width: 800px) 100vw, 50vw"
                    style="width: 100%; aspect-ratio: 1.25"
                    loading="lazy"
                    decoding="async"
                    alt="Vorschaubild von «Herz. Feministische Strategien und queere Hoffnung.»"
                />
                </picture>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

h1 {
    font-size: clamp(4rem, 10vw, 9rem);
}
</style>