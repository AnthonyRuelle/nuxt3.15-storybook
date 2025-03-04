import * as sharedTailwindConfig from './shared-tailwind-config'

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'selector',
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './App.vue',
        './presets/**/*.{js,vue,ts}',
    ],
    theme: {
        extend: {
            ...sharedTailwindConfig.theme,
        },
    },
}
