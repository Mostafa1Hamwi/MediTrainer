<script setup>
import { ref } from "vue";
import CustomButton from "../components/CustomButton.vue";
import Input from "./Input.vue";
import axios, { Axios } from "axios"

let props = defineProps(['type'])
// let result=null
const result=ref("")
const API_URL='http://192.168.5.1:8000/'

async function AnalyzeKidney() {
  const formData = new FormData();
  formData.append('picture', selectedFile.value);
  console.log(selectedFile.value)
  axios.post(`${API_URL}predict/images/kidney/`,formData).then((response)=>{
    console.log(response)
    result.value=response.data
    })
}

async function AnalyzeChest() {
  const formData = new FormData();
  formData.append('picture', selectedFile.value);
  console.log(selectedFile.value)
  axios.post(`${API_URL}predict/images/pneumonia/`,formData).then((response)=>{
    console.log(response)
    result.value=response.data
    })
}

async function AnalyzeBrain() {
  const formData = new FormData();
  formData.append('picture', selectedFile.value);
  console.log(selectedFile.value)
  axios.post(`${API_URL}predict/images/brain/`,formData).then((response)=>{
    console.log(response)
    result.value=response.data
    })
}

async function AnalyzeCovid() {
  const formData = new FormData();
  formData.append('picture', selectedFile.value);
  console.log(selectedFile.value)
  axios.post(`${API_URL}predict/images/covid/`,formData).then((response)=>{
    console.log(response)
    result.value=response.data
    })
}

const selectedFile = ref(null)

function OnFileSelected(event) {
  const file = event.target.files[0];
  const acceptedImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
  if (acceptedImageTypes.includes(file.type)) {
    // Update the selectedFile value with the selected file
    selectedFile.value = file;
  } else {
    // Clear the selectedFile value
    selectedFile.value = null;
    // Display an error message
    alert('Please select a valid image file (GIF, JPEG, or PNG)');
  }
}
</script>

<template>
  <div class="w-5/12 mt-14">
    <h1 :class="{
        ' text-3xl font-bold':true,
        'text-blue-400': type == 'home',
        'text-green-500': type == 'summarization',
        'text-red-500': type == 'simplification',
        'text-indigo-700': type == 'image',
        'text-yellow-500': type == 'graph',
    }">Let's Get Started</h1>

    <label for="dropzone-file" :class="{
        'flex justify-center items-center h-64 bg-blue-50 border-4 border-dashed rounded-xl mt-7 text-center cursor-pointer':true,
        'border-blue-400': type == 'home',
        'border-green-500': type == 'summarization',
        'border-red-500': type == 'simplification',
        'border-indigo-700': type == 'image',
        'border-yellow-500': type == 'graph',
    }" accept="image/*">
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
            <img src="../assets/upload.svg" alt="" class="mx-auto mt-8 h-14 w-14">
          </i>
          <!-- End of Upload Icon -->
          <input id="dropzone-file" type="file" class="hidden" accept="image/*" @change="OnFileSelected"/>
        </div>
        <p class="text-xl text-gray-500 mt-4">Upload Your File Here</p>
      </div>
      <!-- End of Box -->
    </label>
    <div class=" flex justify-center mt-6 space-x-3">
      <CustomButton :type="type" @click="AnalyzeCovid" class="text-sm"> <template #text>Covid-19</template> </CustomButton>
      <CustomButton :type="type" @click="AnalyzeChest" class="text-sm" > <template #text>Chest X-Ray</template> </CustomButton>
      <CustomButton :type="type" @click="AnalyzeKidney" class="text-sm" > <template #text>Kidney</template> </CustomButton>
      <CustomButton :type="type" @click="AnalyzeBrain" class="text-sm"> <template #text>Brain Tumor</template> </CustomButton>
    </div>
    <div v-if="result">
    <h2 class="text-2xl text-black font-bold mt-10 absolute ml-2 ">Result is: {{ result }}</h2>
    </div>

    
  </div>
  
</template>