<template>
    <div class="card flex flex-col justify-start max-w-xs rounded bg-white shadow-md">
        <div class="card-header">
            <img class="card-image w-full h-auto object-cover rounded-t"
                :src="post._embedded?.['wp:featuredmedia']?.[0]?.source_url" :alt="post.title.rendered" />
        </div>
        <div class="card-body p-4">
            <h3 class="card-title text-lg font-bold uppercase mb-2" v-html="post.title.rendered"></h3>

            <p class="card-category text-sm font-medium uppercase text-primary mb-2">
                {{ post._embedded['wp:term']?.[0]?.[0]?.name }}
            </p>

            <div class="card-content text-base leading-6 text-dark line-clamp-4">
                {{ stripHtml(post.content.rendered) }}
            </div>
        </div>
        <div class="card-footer flex flex-row justify-between items-center mt-auto p-4">
            <div class="card-date flex flex-row items-center text-sm gap-2 text-light">
                <Icon name="lucide:calendar" class="w-4 h-4"/>
                <span>{{ new Date(post.date).toLocaleDateString('fr-FR') }}</span>
            </div>
            <NuxtLink :to="`/articles/${post.slug}`" class="card-footer-button">Lire la suite →</NuxtLink>
        </div>
    </div>
</template>

<script setup>


defineProps({
    post: {
        type: Object,
        required: true
    }
})

function stripHtml(html) {
  if (typeof document !== "undefined") {
    const tmp = document.createElement("div");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  }
  return "";
}

</script>

<style scoped></style>
