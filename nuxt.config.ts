import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
    components: [
        {
            path: '~/components',
            pathPrefix: false,
            extensions: ['.vue'],
        },
    ],

    alias: {
        '@components': fileURLToPath(new URL('./components', import.meta.url)),
    },
    css: ['~/assets/css/fonts.css', '~/assets/css/global.css'],
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/storybook'],

    storybook: {
        url: 'http://localhost:6006',
        storybookRoute: '/__storybook__',
        port: 6006,
    },

    vite: {
        resolve: {
            alias: {
                '@components': fileURLToPath(new URL('./components', import.meta.url)),
                // For storybook
                vue: 'vue/dist/vue.esm-bundler.js',
            },
        },
    },

    experimental: {
        appManifest: false,
    },

    devtools: { enabled: true },
    compatibilityDate: '2025-02-21',
})
