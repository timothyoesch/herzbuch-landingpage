import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    css: [
        "~/assets/css/main.scss",
        "~/assets/css/tailwind.css",
    ],
    vite: {
        plugins: [
            tailwindcss()
        ]
    },
    app: {
        head: {
            htmlAttrs: {
                lang: "de"
            },
            link: [
                { rel: "icon", type: "image/png", href: "/images/favicon/favicon-96x96.png", sizes: "96x96" },
                { rel: "icon", type: "image/svg+xml", href: "/images/favicon/favicon.svg" },
                { rel: "shortcut icon", href: "/images/favicon/favicon.ico" },
                { rel: "apple-touch-icon", sizes: "180x180", href: "/images/favicon/apple-touch-icon.png" },
                { rel: "manifest", href: "/images/favicon/site.webmanifest" }
            ],
            meta: [
                { name: "apple-mobile-web-app-title", content: "Herz." }
            ]
        }
    }
})