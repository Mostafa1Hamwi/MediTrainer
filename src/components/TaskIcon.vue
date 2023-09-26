<script setup>
let props = defineProps(['type'])

function text(type) {
  let text
  if (type == 'toDo') {
    text = 'To Do'
  } else if (type == 'inProgress') {
    text = 'In Progress'
  } else {
    text = 'done'
  }
  return text
}
</script>
<template>
  <div class="flex">
    <div
      :class="{
        'flex w-32 h-32 rounded-full text-center text-white font-bold drop-shadow-lg text-sm': true,
        'bg-red-600': type == 'toDo',
        'bg-yellow-500': type == 'inProgress',
        'bg-green-500': type == 'done'
      }"
    >
      <div class="m-auto">
        <slot name="icon"></slot>
      </div>
    </div>

    <div class="self-center ml-4">
      <p class="text-2xl font-bold">{{ text(type) }}</p>
      <p class="font-light text-gray-500">3 Tasks</p>
    </div>
  </div>
</template>
