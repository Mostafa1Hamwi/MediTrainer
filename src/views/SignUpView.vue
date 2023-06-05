<script setup>
import Input from "../components/Input.vue"
import CustomButton from "../components/CustomButton.vue"
import { ref } from "vue"
import axios from "axios"
const firstName=ref("")
const lastName=ref("")
const email=ref("")
const password=ref("")

function handleSubmit(){
    const data={
     first_name:firstName.value,
     last_name:lastName.value,
     email:email.value,
     password:password.value,
     // gender:'m',
     // birth_date:'10-5-2018'
    };
// axios.post("http://127.0.0.1:8000/register",data).then((result)=>{
// console.log(result)
// })

axios.get("https://jsonplaceholder.typicode.com/posts").then((result)=>{
console.log(result)
})
    

    console.log(data)
}

</script>
<template>
    <div class="grid grid-cols-9 h-screen" id="wide-div">
        <div class="col-span-6">
        <img src="../assets/photos/sign.jpeg" alt="" class="shadow-2xl">
    </div>
    <div class="col-span-2">
        <div class="ml-12 mt-24 space-y-8">
        <div>
        <img src="../assets/logoNoText.svg" alt="" class="mb-4 w-16">
        <h2 class="text-3xl font-bold">Create an account</h2>
        <p class="text-gray-400">Welcome to MediTrainer !</p>
        </div>

     <form @submit.prevent="handleSubmit">
        <div class="space-y-3">
            <div class="flex space-x-7">
           <Input v-model="firstName">
                <template #span>First Name</template>
           </Input>
           <Input v-model="lastName">
                <template #span>Last Name</template>
           </Input>
        </div>
        <div class="space-y-3">
           <Input :type="'wide'" :inputType="'email'" v-model="email">
                <template #span>Email</template>
           </Input>
           <Input :type="'wide'" :inputType="'password'" v-model="password">
                <template #span>Password</template>
           </Input>
        </div>
        <div class="flex space-x-2 items-center">
        <input type="checkbox" name="" id="">
        <p class="text-sm">I Agree With MediTrainer User Agreement</p>
          </div>
        </div>

        <div class="space-y-2 inline-block mt-3">
        <CustomButton type="home"> <template #text>Sign Up</template> </CustomButton>
        <p class="text-sm text-center">Already Have an Account ? <span class="text-blue-700 underline"> <RouterLink to="/login">Sign In </RouterLink> </span></p>
     </div>
     </form>
</div>
    </div>
    </div>
</template>

<style>
#wide-div {
  width: calc(100vw - 20px);
  margin-left: calc(-50vw + 50% );
}
</style>