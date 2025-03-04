import type { Meta, StoryObj } from '@storybook-vue/nuxt'

import UiTextContent from './UiTextContent.vue'
import {
    UiTextContentSize3Xl,
    UiTextContentSize2Xl,
    UiTextContentSizeXl,
    UiTextContentSizeLg,
    UiTextContentSizeBase,
    UiTextContentSizeSm,
    UiTextContentSizeXs,
} from './types'

const meta = {
    title: 'Text/TextContent',
    component: UiTextContent,
    parameters: {
        docs: {
            description: {
                component:
                    'A component designed to display body text or content, providing the main information or details in a section.',
            },
        },
    },
    argTypes: {
        size: {
            options: [
                UiTextContentSize3Xl,
                UiTextContentSize2Xl,
                UiTextContentSizeXl,
                UiTextContentSizeLg,
                UiTextContentSizeBase,
                UiTextContentSizeSm,
                UiTextContentSizeXs,
            ],
            control: {
                type: 'select',
            },
            description: 'Size of the text',
            table: {
                defaultValue: { summary: UiTextContentSizeBase },
                type: {
                    summary: 'TextContentSize',
                },
            },
        },
        text: {
            control: 'text',
            description: 'Text to display',
            type: { name: 'string', required: true },
        },
        center: {
            control: 'boolean',
            description: 'Center the text',
            table: {
                defaultValue: { summary: 'false' },
                type: {
                    summary: 'boolean',
                },
            },
        },
        bold: {
            control: 'boolean',
            description: 'Make the text bold',
            table: {
                defaultValue: { summary: 'false' },
                type: {
                    summary: 'boolean',
                },
            },
        },
        italic: {
            control: 'boolean',
            description: 'Make the text italic',
            table: {
                defaultValue: { summary: 'false' },
                type: {
                    summary: 'boolean',
                },
            },
        },
    },
    tags: ['autodocs'],
} satisfies Meta<typeof UiTextContent>

export default meta
type Story = StoryObj<typeof meta>

export const Story: Story = {
    args: {
        text: 'Hello world !',
        size: UiTextContentSizeBase,
        center: false,
        bold: false,
        italic: false,
    },
}
