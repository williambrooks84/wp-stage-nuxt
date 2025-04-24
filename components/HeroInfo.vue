<template>
    <div class="flex items-center space-x-2">
        <component :is="icon" class="w-5 h-5 text-light" />
        <span class="font-bold">{{ label }} :</span>
        <a class="text-primary hover:underline" :href="link" target="_blank">{{ Name }}</a>
    </div>
</template>

<script setup>

const props = defineProps({
    icon: {
        type: Function,
        required: true
    },
    label: {
        type: String,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
})

</script>

<style scoped>
@import "tailwindcss";
@import "@nuxt/ui";
</style>