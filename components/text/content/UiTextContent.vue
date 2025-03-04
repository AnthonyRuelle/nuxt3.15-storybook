<script setup lang="ts">
import {
    UiTextContentSize3Xl,
    UiTextContentSize2Xl,
    UiTextContentSizeXl,
    UiTextContentSizeLg,
    UiTextContentSizeBase,
    UiTextContentSizeSm,
    UiTextContentSizeXs,
    type UiTextContentSize,
} from './types'

const props = defineProps({
    size: {
        type: String as () => UiTextContentSize,
        default: () => UiTextContentSizeBase,
    },
    text: {
        type: String,
        default: '',
    },
    overrideTextColor: Boolean,
    center: Boolean,
    bold: Boolean,
    italic: Boolean,
})

const classes = computed<string>(() => {
    const baseClasses = []

    if (!props.overrideTextColor) baseClasses.push('text-surface-600')
    if (props.center) baseClasses.push('text-center')
    if (props.bold) baseClasses.push('font-bold')
    if (props.italic) baseClasses.push('italic')

    const sizeClasses = getSizeClasses()

    return [...baseClasses, ...sizeClasses].join(' ')
})

const getSizeClasses = () => {
    switch (props.size) {
        case UiTextContentSize3Xl:
            return ['text-3xl', 'leading-9']
        case UiTextContentSize2Xl:
            return ['text-2xl', 'leading-loose']
        case UiTextContentSizeXl:
            return ['text-xl', 'leading-7']
        case UiTextContentSizeLg:
            return ['text-lg', 'leading-7']
        case UiTextContentSizeBase:
            return ['text-base', 'leading-normal']
        case UiTextContentSizeSm:
            return ['text-sm', 'leading-tight']
        case UiTextContentSizeXs:
            return ['text-xs', 'leading-none']
        default:
            return []
    }
}
</script>

<template>
    <p class="UiTextContent font-sans tracking-tight" :class="classes">
        <slot>{{ text }}</slot>
    </p>
</template>
