<script setup>
import SkeletonBox from '../components/SkeletonBox.vue'
import CoreIcon from '../components/CoreIcon.vue'
import axios, { Axios } from 'axios'
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
let props = defineProps(['type'])

const API_URL = 'http://192.168.5.1:8000/'

const route = useRoute()

const originalText = ref('')
const newText = ref('')

onMounted(() => {
  originalText.value = route.query.originalText
  newText.value = route.query.response
})

async function translate() {
  let text = { text: newText.value }
  axios.post(`${API_URL}predict/text/text_translate/`, text).then((response) => {
    newText.value = response.data.result
  })
}

async function play() {
  let data = {
    text: newText.value
  }
  axios
    .post(`${API_URL}predict/text/text_to_voice/`, data, { responseType: 'blob' })
    .then((response) => {
      const blob = new Blob([response.data], { type: 'audio/mpeg' })
      const url = URL.createObjectURL(blob)
      const audio = new Audio(url)
      audio.play()
    })
    .catch((error) => {
      console.error(error)
    })
}
</script>
<template>
  <div class="grid grid-cols-11 space-x-5 mt-14">
    <div class="col-span-5">
      <SkeletonBox :type="'skeleton'" :originalText="originalText" />
    </div>
    <div class="col-span-1"></div>
    <div class="col-span-5">
      <SkeletonBox :type="'result'" :originalText="newText" />
    </div>
  </div>
  <div class="grid grid-cols-11 space-x-5 mt-14">
    <div class="col-span-7"></div>
    <div class="col-span-1">
      <CoreIcon type="sound" class="items-center cursor-pointer" @click="play">
        <template #icon>
          <img alt="" src="@/assets/sound.svg" width="60" class="m-auto -mt-7" />
        </template>
      </CoreIcon>
    </div>
    <div class="col-span-1"></div>
    <div class="col-span-1">
      <CoreIcon type="translate" class="items-center cursor-pointer" @click="translate">
        <template #icon>
          <img alt="" src="@/assets/translate.svg" width="60" class="m-auto -mt-7" />
        </template>
      </CoreIcon>
    </div>
  </div>
</template>
