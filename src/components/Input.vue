<script setup>
let props = defineProps(['type'])
</script>

<template>
    <div>
    <p> <slot name="span"></slot> </p>
    <input type="text" :class="{
        'rounded-sm h-9 mt-1 border border-gray-300 pl-2':true,
        'w-96': type == 'wide',
    }">
</div>
</template>