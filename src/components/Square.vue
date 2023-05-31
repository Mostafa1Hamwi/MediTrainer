<script setup>
let props = defineProps(['type'])
</script>
<template>
    <div
    :class="{
        'w-6/12 overflow-auto bg-transparent border-4 rounded-xl self-center -mt-5':true,
        'border-blue-400': type == 'home',
        'border-green-500': type == 'summarization',
        'border-red-500': type == 'simplification',
        'border-indigo-700': type == 'image',
        'border-yellow-500': type == 'graph',
    }" >
        <div class="text-black p-4 ml-6 mt-6 max-w-xl">
        <h2 class="flex text-4xl font-bold"><slot name="normalHeading"></slot><p :class="{
        'text-blue-400': type == 'home',
        'text-green-500': type == 'summarization',
        'text-red-500': type == 'simplification',
        'text-indigo-700': type == 'image',
        'text-yellow-500': type == 'graph',
    }"><slot name="heading"></slot> </p></h2>
        <p class="mt-8 mb-10"><slot name="text"></slot></p>
        </div>
    </div>
</template>