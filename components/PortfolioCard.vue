<template>
    <div class="max-w-sm mx-auto shadow-lg overflow-hidden group relative">
        <!-- Image -->
        <img v-if="portfolio._embedded && portfolio._embedded['wp:featuredmedia']"
            :src="portfolio._embedded['wp:featuredmedia'][0].source_url" alt="Image du projet"
            class="w-full aspect-square object-cover" />

        <!-- Content -->
        <div
            class="absolute inset-0 p-6 flex flex-col justify-center group-hover:bg-primary/80 transition duration-300">
            <div class="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-300 z-0">
            </div>

            <div class="relative flex flex-col justify-center items-center text-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 text-lg font-medium text-white">

                <h2 class="uppercase">
                    {{ portfolio.title.rendered }}
                </h2>

                <div class="border-b-2 border-dotted border-white w-full my-4"></div>

                <p class="mb-4">
                    {{ portfolio.acf.petite_description }}
                </p>

                <div class="flex flex-col justify-center gap-3 mt-4">
                    <NuxtLink v-if="portfolio.acf.etude_de_cas_url" :to="portfolio.acf.etude_de_cas_url.url"
                        class="btn btn-white-outline transition" v-ripple>
                        {{ portfolio.acf.etude_de_cas_url.title || 'Étude de Cas' }}
                    </NuxtLink>

                    <a v-if="portfolio.acf.lien_live" :href="portfolio.acf.lien_live.url"
                        :target="portfolio.acf.lien_live.target"
                        class="btn btn-white-borderless transition"
                        rel="noopener noreferrer"
                        v-ripple>
                        {{ portfolio.acf.lien_live.title || 'Voir en Live' }}
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
// Props du composant : un portfolio avec tous les champs ACF
defineProps({
    portfolio: {
        type: Object,
        required: true
    }
})
</script>

<style scoped>
/* Styles supplémentaires si nécessaire */
</style>