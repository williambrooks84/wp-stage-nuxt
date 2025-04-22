<template>
  <NuxtLayout />
  <main>
    <div>
      <Breadcrumb />
    </div>
    <div>
      <Hero />
    </div>
    <ul v-if="posts">
      <li v-for="post in posts" :key="post.id">
        <h2 class="text-xl font-semibold" v-html="post.title.rendered" />
        <div class="text-gray-600" v-html="post.excerpt.rendered" />
      </li>
    </ul>
    <p v-else>Chargement en cours...</p>
  </main>
</template>

<script setup lang="ts">
import Breadcrumb from '~/components/Breadcrumb.vue'
import Hero from '~/components/Hero.vue'

interface Post {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
}

const { data: posts } = await useFetch<Post[]>('http://wp-stage.local/wp-json/wp/v2/posts')
</script>

<style scoped>
@import "tailwindcss";
@import "@nuxt/ui";
</style>