<script setup>
import Input from "../components/Input.vue"
import axios, { Axios } from "axios"
import { ref } from "vue";

let props= defineProps(['tasks'])

const title=ref("")
const description=ref("")
const start_date=ref("")
const end_date=ref("")
const category=ref("")

async function addTask(){
    const data={
     title:title.value,
     description:description.value,
     start_date:start_date.value,
     end_date:end_date.value,
     category:category.value,
    };

    axios.post('http://localhost:5000/tasks',data).then((response)=>{
    console.log(response)
    // add the newly created task to the tasks array
    props.tasks.push(response.data);

    })
}

</script>
<template>
    <div class="border-4 border-blue-400 rounded-lg overflow-x-auto inline-block p-5" >
    <form @submit.prevent="addTask">
        <div class="space-y-4">
         <Input v-model="title">
                <template #span>Title</template>
           </Input>
           <p>Description</p>
           <textarea name="" id="" cols="40" rows="4" v-model="description"></textarea>
           <div class="flex space-x-6">
           <Input :inputType="'date'" v-model="start_date">
                <template #span>Start Date</template>
           </Input>
           <Input :inputType="'date'" v-model="end_date">
                <template #span>End Date</template>
           </Input>
        </div>
        <Input :type="'wide'" v-model="category">
        <template #span>Category</template>
        </Input>
    </div>
    <button class=" items-center py-2 px-4 text-white font-bold bg-blue-400 hover:bg-blue-500 text-lg rounded-lg mt-6 shadow-lg w-full ">Add Task</button>    
    </form>

</div>
</template>