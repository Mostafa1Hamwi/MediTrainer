<script setup>
let props = defineProps({
type:{
    type:String
},
inputType:{
    type:String
},
modelValue:{
    type:[String,Number],
    default:''
}
})

</script>

<template>
    <div>
    <p> <slot name="span"></slot> </p>
    <input :type='inputType'
    v-bind="$attrs"
    :value="modelValue"
    @input="$emit('update:modelValue',$event.target.value   )"
    :class="{
        'rounded-sm h-9 mt-1 border border-gray-300 pl-2':true,
        'w-96': type == 'wide',
        'w-96 h-16': type == 'ultraWide'

    }">
</div>
</template>