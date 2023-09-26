<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const imgSrc = ref('')

onMounted(() => {
  imgSrc.value = route.query.imgSrc
})
</script>
<template>
  <div class="mt-16">
    <h1 class="text-3xl text-yellow-400 mb-10 font-bold">Graph Results</h1>
    <img :src="imgSrc" v-if="imgSrc" />
  </div>
</template>
