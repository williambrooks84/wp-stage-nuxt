<template>
    <div>
        <div class="flex flex-col-reverse lg:flex-row items-center justify-center">
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
                    <li class="flex items-center">
                        <i class="bi bi-backpack2-fill pr-2"></i>
                        <span class="font-bold">Etudiant</span>: 
                        <a class="text-blue-500 hover:underline" href="https://github.com/williambrooks84" target="_blank">William Brooks</a>
                    </li>
                    <li class="flex items-center">
                        <i class="bi bi-briefcase-fill pr-2"></i>
                        <span class="font-bold">Entreprise d'accueil</span>: 
                        <a class="text-blue-500 hover:underline" href="https://etienneleriche.fr" target="_blank">Etienne Leriche • Web Designer Freelance</a>
                    </li>
                    <li class="flex items-center">
                        <i class="bi bi-calendar-fill pr-2"></i>
                        <span class="font-bold">Dates</span>: 
                        <span>Du 14 avril au 13 juin 2025</span>
                    </li>
                </ul>

                <div class="mt-6 flex space-x-4">
                    <a href="#" class="btn btn-info uppercase bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">En savoir plus</a>
                    <a href="#" class="btn btn-outline border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white">Portfolio</a>
                </div>
            </div>

            <!-- Right -->
            <div class="w-full lg:w-5/12 text-center">
                <img src="public/assets/img/hero_will_blue_1.svg" alt="Hero Image" class="w-full max-w-md mx-auto">
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
@import "tailwindcss";
@import "@nuxt/ui";
</style>