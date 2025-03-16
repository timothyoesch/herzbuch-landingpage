<template>
    <div class="font-din">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080">
            <path id="herz" fill="none"
                d="M907.2,365.5c-5.8,339.6-367.4,541.8-367.4,541.8,0,0-361.3-202.1-367.1-541.8-1.9-111.3,52.2-192.7,149.6-192.7s218.1,103.7,218.1,103.7c0,0,111-103.7,217.2-103.7s151.4,81.5,149.6,192.7Z" />

            <text dominant-baseline="middle">
                <textPath style="fill-opacity: 1;" href="#herz" side="left" startOffset="100%">
                    <slot></slot>
                    <animate attributeName="startOffset" from="100%" to="-100%" dur="50s" repeatCount="indefinite" />
                </textPath>
            </text>

            <text dominant-baseline="middle">
                <textPath style="fill-opacity: 1; fill: inherit" href="#herz" side="left" startOffset="100%">
                    <slot></slot>
                    <animate attributeName="startOffset" from="100%" to="-100%" dur="50s" begin="25s"
                        repeatCount="indefinite" />
                </textPath>
            </text>
        </svg>
    </div>
</template>

<style lang="scss" scoped>
svg text {
    font-size: 69px;
}
</style>