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
    else if(type =='image'){
        text='Analyze'
    }
    else if(type =='graph'){
        text='Draw'
    }
    else{
        text='Submit'
    }
    return text
}

let selectedFile=null

function OnFileSelected(event){
this.selectedFile=event.target.files[0]
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

<label for="dropzone-file" :class="{
        'flex justify-center items-center h-64 bg-blue-50 border-4 border-dashed rounded-xl mt-7 text-center cursor-pointer':true,
        'border-blue-400': type == 'home',
        'border-green-500': type == 'summarization',
        'border-red-500': type == 'simplification',
        'border-indigo-700': type == 'image',
        'border-yellow-500': type == 'graph',
    }">  
   <div>
    <div 
    :class="{
    ' w-32 h-32 rounded-full drop-shadow-lg mx-auto':true,
        'bg-blue-400 hover:bg-blue-500': type == 'home',
        'bg-green-500 hover:bg-green-600': type == 'summarization',
        'bg-red-500 hover:bg-red-600': type == 'simplification',
        'bg-indigo-700 hover:bg-indigo-800': type == 'image',
        'bg-yellow-500 hover:bg-yellow-600': type == 'graph',
    }" >
 
 <i class="flex">
  <img src="../assets/upload.svg" alt=""  class="mx-auto mt-8 h-14 w-14">
 </i>
 <!-- End of Upload Icon -->

 <input id="dropzone-file" type="file" class="hidden" @change="OnFileSelected"/>
</div>
<p class="text-xl text-gray-500 mt-4">Upload Your File Here</p>
</div>
<!-- End of Box -->
</label>
<div class=" flex justify-center mt-6">
<CustomButton :type="type" > <template #text>{{text(type)}}</template> </CustomButton>
</div>
</div>
</template>