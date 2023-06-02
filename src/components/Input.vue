<script setup>
let props = defineProps(['type','inputType'])

</script>

<template>
    <div>
    <p> <slot name="span"></slot> </p>
    <input :type='inputType' :class="{
        'rounded-sm h-9 mt-1 border border-gray-300 pl-2':true,
        'w-96': type == 'wide',
        'w-96 h-16': type == 'ultraWide'

    }">
</div>
</template>