<script setup>
let props = defineProps(['type'])
</script>
<template>

    <div 
    :class="{
    'flex w-36 h-36 rounded-full text-center text-white font-bold drop-shadow-lg text-sm m-auto':true,
        'bg-blue-400': type == 'home',
        'bg-green-500': type == 'summarization',
        'bg-red-500': type == 'simplification',
        'bg-indigo-700': type == 'image',
        'bg-yellow-400': type == 'graph',
        'bg-slate-700': type == 'sound',
        'bg-orange-500': type == 'translate',

    }" >
       <div class="mt-4 mx-auto">
            <slot name="icon" ></slot>
        <p class="-mt-1 px-2"><slot name="text"></slot></p>
    </div>
</div>

</template>