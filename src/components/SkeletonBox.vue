<script setup>
import { ref } from 'vue'

let props = defineProps(['type', 'originalText'])

function text(type) {
  let text
  if (type == 'summarization') {
    text = 'Summarized Text'
  } else if (type == 'simplification') {
    text = 'Simplified Text'
  } else if (type == 'result') {
    text = 'Results'
  } else {
    text = 'Orignial Text'
  }
  return text
}
</script>
<template>
  <h1
    class="text-3xl font-bold"
    :class="{
      'text-green-500': type == 'summarization',
      'text-red-500': type == 'simplification',
      'text-gray-600': type == 'skeleton',
      'text-blue-600': type == 'result'
    }"
  >
    {{ text(type) }}
  </h1>

  <label
    :class="{
      'flex justify-center items-center h-64 bg-blue-50 border-4 border-dashed rounded-xl mt-7 text-center cursor-pointer': true,
      'border-blue-400': type == 'home',
      'border-green-500': type == 'summarization',
      'border-red-500': type == 'simplification',
      'border-indigo-700': type == 'image',
      'border-yellow-500': type == 'graph',
      'border-gray-500': type == 'skeleton',
      'border-blue-600': type == 'result'
    }"
  >
    <textarea
      name=""
      id=""
      cols="65"
      rows="10"
      class="border-none resize-none outline-none bg-inherit"
      v-model="props.originalText"
    >
    </textarea>
    <!-- End of Box -->
  </label>
</template>
