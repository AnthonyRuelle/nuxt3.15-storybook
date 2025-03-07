import type { StorybookConfig } from '@storybook-vue/nuxt'
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
    stories: ['../components/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: ['@storybook/addon-essentials'],
    framework: {
        name: '@storybook-vue/nuxt',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
    async viteFinal(config) {
        return mergeConfig(config, {
         optimizeDeps: {
           include: ['jsdoc-type-pratt-parser'],
         }
       });
     }
}
export default config
