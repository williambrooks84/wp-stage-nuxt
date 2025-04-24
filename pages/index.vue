<template>
  <NuxtLayout />
  <main class="container mx-auto px-4 py-8">
    <div>
      <Breadcrumb />
    </div>
    <div>
      <Hero />
    </div>
    <div>
      <Articles/>
    </div>
    <div>
      <PortfolioCard v-for="item in portfolios" :key="item.id" :portfolio="item" />
    </div>
  </main>
</template>

<script setup lang="ts">
import Breadcrumb from '~/components/Breadcrumb.vue'
import Hero from '~/components/Hero.vue'
import Articles from '~/components/Articles.vue'
import PortfolioCard from '~/components/PortfolioCard.vue'

interface Portfolio {
  id: number;
  // Add other properties of the portfolio object if needed
}

const { data: portfolios } = await useFetch<Portfolio[]>('http://wp-stage.local/wp-json/wp/v2/portfolio?_embed')
</script>

<style scoped>
@import "tailwindcss";
@import "@nuxt/ui";
</style>