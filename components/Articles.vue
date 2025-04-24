<template>
    <div id="articles" class="flex flex-col justify-center py-8 gap-10 items-stretch">
        <h1 class="uppercase text-3xl font-bold">
            Derniers journaux
        </h1>
        <div class="articles flex flex-col lg:flex-row justify-center items-center gap-8 lg:items-stretch mt-8">
            <Card v-for="post in posts" :key="post.id" :post="post" />
        </div>
        <a href="/articles" class="btn btn-light self-center" v-ripple>Voir tous les articles</a>
    </div>
</template>

<script setup>
import Card from './Card.vue'

const config = useRuntimeConfig()
const { data: posts, pending, error } = await useFetch('http://wp-stage.local/wp-json/wp/v2/posts?_embed&per_page=3')
</script>

<style scoped lang="scss"></style>