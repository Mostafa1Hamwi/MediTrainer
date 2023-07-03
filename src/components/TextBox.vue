<script setup>
import CustomButton from "../components/CustomButton.vue";
import Input from "./Input.vue";
let props= defineProps(['type'])
function text(type){
    let text;
    if (type =='summarization'){
        text='Summarize'
    }
    else if(type =='simplification'){
        text='Simplify'
    }
    else if(type =='graph'){
        text='Draw'
    }
    else{
        text='Submit'
    }
    return text
}

</script>
<template>
    <div class="w-5/12 mt-14" >
    <h1  :class="{
    ' text-3xl font-bold':true,
        'text-blue-400': type == 'home',
        'text-green-500': type == 'summarization',
        'text-red-500': type == 'simplification',
        'text-indigo-700': type == 'image',
        'text-yellow-500': type == 'graph',
    }" >Let's Get Started</h1>

<label :class="{
        'flex justify-center items-center h-64 bg-blue-50 border-4 border-dashed rounded-xl mt-7 text-center cursor-pointer':true,
        'border-blue-400': type == 'home',
        'border-green-500': type == 'summarization',
        'border-red-500': type == 'simplification',
        'border-indigo-700': type == 'image',
        'border-yellow-500': type == 'graph',
    }">  
    <textarea name="" id="" cols="65" rows="10" class="border-none resize-none outline-none bg-inherit ">

    </textarea>
 
<!-- End of Box -->
</label>
<div class=" flex justify-center mt-6">
<CustomButton :type="type" > <template #text>{{text(type)}}</template> </CustomButton>
</div>
</div>
</template>