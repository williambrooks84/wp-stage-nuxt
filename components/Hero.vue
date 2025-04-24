<template>
    <div class="flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between mb-8">
        <!-- Left -->
        <div class="w-full lg:w-7/12 text-center lg:text-left">
            <h1 class="uppercase text-3xl font-bold">Rapport de stage intéractif</h1>
            <h2 class="mt-3 text-xl font-semibold">Introduction :</h2>
            <p class="mt-2">
                Ce rapport de stage interactif à pour but de répertorier les éléments essentiels des tâches
                effectuées lors du stage MMI 2025 deuxième année pour une durée de 8 semaines.
            </p>
            <h3 class="mt-4 text-lg font-semibold">Infos :</h3>
            <ul class="mt-2 space-y-2">
                <li v-for="(info, index) in heroInfo" :key="index" class="flex items-center">
                    <HeroInfo :icon="info.icon" :label="info.label" :Name="info.Name" :link="info.link" />
                </li>
            </ul>

            <div class="mt-6 flex space-x-4">
                <a href="#" class="btn btn-light" v-ripple>En savoir plus</a>
                <a href="#" class="btn btn-borderless" v-ripple>Portfolio</a>
            </div>
        </div>

        <!-- Right -->
        <div class="w-full lg:w-5/12 text-center lg:text-right">
            <img src="public/assets/img/hero_will_blue_1.svg" alt="Hero Image" class="w-full max-w-md lg:ml-auto">
        </div>
    </div>
</template>

<script setup>
import HeroInfo from './HeroInfo.vue';
import { AcademicCapIcon, BriefcaseIcon, CalendarIcon } from '@heroicons/vue/24/outline'

const heroInfo = [
    {
        icon: AcademicCapIcon,
        label: 'Etudiant',
        Name: 'William Brooks',
        link: 'https://github.com/williambrooks84'
    },
    {
        icon: BriefcaseIcon,
        label: 'Entreprise d\'accueil',
        Name: 'Etienne Leriche • Web Designer Freelance',
        link: 'https://etienneleriche.fr'
    },
    {
        icon: CalendarIcon,
        label: 'Dates',
        Name: 'Du 14 avril au 13 juin 2025',
        link: '#'
    }
]

</script>

<style scoped>
@import "tailwindcss";
@import "@nuxt/ui";
</style>