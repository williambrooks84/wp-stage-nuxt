<template>
    <header>
        <NavBar/>
    </header>
    <slot />
</template>

<script setup lang="ts">
import NavBar from '~/components/NavBar.vue'
</script>
