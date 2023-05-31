<script setup>
let props=defineProps(['type'])
</script>
<template>
    <button
    :class="{
    ' px-36 py-2 border rounded-xl text-white text-lg font-bold drop-shadow-lg ':true,
        'bg-blue-400 w-96': type == 'home',
        'bg-green-500 hover:bg-green-600': type == 'summarization',
        'bg-red-500 hover:bg-red-600': type == 'simplification',
        'bg-indigo-700 hover:bg-indigo-800': type == 'image',
        'bg-yellow-500 hover:bg-yellow-600': type == 'graph',
    }">
    <slot name="text"></slot>
    </button>
</template>