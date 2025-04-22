<template>
    <nav class="w-full py-2 text-sm" aria-label="breadcrumb">
        <ol class="flex flex-wrap items-center gap-2 text-lightgray">
            <li>
                <NuxtLink to="/" class="hover:underline uppercase text-lg">
                    {{ name || 'Accueil' }}
                </NuxtLink>
                <span v-if="crumbs.length">›</span>
            </li>
            <li v-for="(crumb, index) in crumbs" :key="index" class="flex items-center">
                <NuxtLink 
                    :to="crumb.to" 
                    class="hover:underline uppercase"
                    :aria-current="index === crumbs.length - 1 ? 'page' : null"
                >
                    {{ crumb.label }}
                </NuxtLink>
                <span v-if="index < crumbs.length - 1">›</span>
            </li>
        </ol>
    </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'

const props = defineProps({
    name: {
        type: String,
        default: 'Accueil', // Provide a default value for the root link
    },
})

const route = useRoute()

// Build crumbs from path
const crumbs = computed(() => {
    const segments = route.path.split('/').filter(Boolean)

    return segments.map((segment, i) => {
        return {
            label: segment.replace(/-/g, ' ').toUpperCase(),
            to: '/' + segments.slice(0, i + 1).join('/'),
        }
    })
})
</script>

<style scoped>
@import "tailwindcss";
@import "@nuxt/ui";
</style>