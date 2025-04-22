<template>
    <nav class="shadow-md w-full">
        <div class="container mx-auto p-4 flex items-center justify-between">
            <img src="/assets/img/logo_stage_will_VF.svg" alt="logo">
            <a href="#" class="flex items-center">
                <svg width="133" height="48" viewBox="0 0 133 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <!-- SVG paths stay the same -->
                </svg>
            </a>

            <span id="slogan" class="mx-auto hidden sm:inline-flex xl:hidden">Citation</span>

            <!-- Mobile menu button (optional if you want responsiveness later) -->
            <button class="xl:hidden text-gray-600 focus:outline-none" @click="isMobileMenuOpen = !isMobileMenuOpen">
                <img src="/assets/icons/burger.svg" alt="burger" class="w-6 h-6" />
            </button>

            <!-- Navigation Links -->
            <div class="hidden xl:flex space-x-8 items-center justify-center flex-1">
                <NavLink v-for="link in navLinks" :href="link.href" :name="link.name" />
            </div>
            <Button class="hidden xl:flex" :padding="'px-4 py-3'" color="bg-secondary" textSize="text-base"
                label="Contact" icon="/assets/icons/send.svg" />
        </div>
    </nav>
    <!-- Mobile nav links -->
    <div v-if="isMobileMenuOpen" class="xl:hidden flex flex-col px-4 pb-4 gap-2 space-y-2 bg-white">
        <NavLink v-for="link in navLinks" :key="link.name" :href="link.href" :name="link.name" />
        <Button :padding="'px-4 py-3'" color="bg-secondary" textSize="text-base" label="Contact"
            icon="/assets/icons/send.svg" class="w-fit" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import NavLink from './NavLink.vue';
import Button from './Button.vue';

const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'A propos', href: '/#' },
    { name: 'Journal de bord', href: '/#' },
    { name: 'Portfolio', href: '/#' },
    { name: 'Crédits', href: '/#' }
];

const isMobileMenuOpen = ref(false);

</script>

<style scoped>
@import "tailwindcss";
@import "@nuxt/ui";
</style>