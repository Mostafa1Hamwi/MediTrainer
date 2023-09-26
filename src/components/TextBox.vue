<script setup>
import { ref } from 'vue'
import axios, { Axios } from 'axios'
import router from '@/router'
import CustomButton from '../components/CustomButton.vue'
let props = defineProps(['type'])
const API_URL = 'http://192.168.5.1:8000/'
const originalText = ref('')
const imgSrc = ref('')

async function Summarize() {
  let text = { text: originalText.value }
  axios.post(`${API_URL}predict/text/text_summarize/`, text).then((response) => {
    console.log(response)
    router.push({
      name: 'textResult',
      query: { originalText: originalText.value, response: response.data }
    })
  })
}

async function Simplify() {
  let text = { text: originalText.value }
  axios.post(`${API_URL}predict/text/text_simplify/`, text).then((response) => {
    console.log(response)
    router.push({
      name: 'textResult',
      query: { originalText: originalText.value, response: response.data }
    })
  })
}

async function Draw() {
  let text = { text: originalText.value }
  axios.post(`${API_URL}predict/text/text_to_graph/`, text).then((response) => {
    imgSrc.value = 'data:image/svg+xml;base64,' + response.data
    console.log(imgSrc.value)
    router.push({
      name: 'graphResult',
      query: { imgSrc: imgSrc.value }
    })
  })
}
function text(type) {
  let text
  if (type == 'summarization') {
    text = 'Summarize'
  } else if (type == 'simplification') {
    text = 'Simplify'
  } else if (type == 'graph') {
    text = 'Draw'
  } else {
    text = 'Submit'
  }
  return text
}
</script>
<template>
  <div class="w-5/12 mt-14">
    <h1
      :class="{
        ' text-3xl font-bold': true,
        'text-blue-400': type == 'home',
        'text-green-500': type == 'summarization',
        'text-red-500': type == 'simplification',
        'text-indigo-700': type == 'image',
        'text-yellow-500': type == 'graph'
      }"
    >
      Let's Get Started
    </h1>

    <label
      :class="{
        'flex justify-center items-center h-64 bg-blue-50 border-4 border-dashed rounded-xl mt-7 text-center cursor-pointer': true,
        'border-blue-400': type == 'home',
        'border-green-500': type == 'summarization',
        'border-red-500': type == 'simplification',
        'border-indigo-700': type == 'image',
        'border-yellow-500': type == 'graph',
        'border-gray-500': type == 'skeleton'
      }"
    >
      <textarea
        name=""
        id=""
        cols="65"
        rows="10"
        class="border-none resize-none outline-none bg-inherit"
        v-model="originalText"
      >
      </textarea>
      <!-- End of Box -->
    </label>
    <div class="flex justify-center mt-6">
      <CustomButton
        :type="type"
        @click="
          type == 'summarization' ? Summarize() : type == 'simplification' ? Simplify() : Draw()
        "
      >
        <template #text>{{ text(type) }}</template>
      </CustomButton>
    </div>
  </div>
  <!-- <img :src="imgSrc" v-if="imgSrc"> -->
</template>
