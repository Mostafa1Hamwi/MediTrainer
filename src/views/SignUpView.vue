<script setup>
import Input from "../components/Input.vue"
import CustomButton from "../components/CustomButton.vue"
import { ref } from "vue"
import axios, { Axios } from "axios"
const first_name=ref("")
const last_name=ref("")
const educational_institut=ref("")
const email=ref("")
const password=ref("")

async function handleSubmit(){
    const data={
     first_name:first_name.value,
     last_name:last_name.value,
     educational_institut:educational_institut.value,
     email:email.value,
     password:password.value,
    };
    console.log(data)
    axios.post('http://192.168.1.7:8000/Accounts/users/',data).then((response)=>{
    console.log(response)
    })
}

</script>
<template>
    <div class="grid grid-cols-9 h-screen" id="wide-div">
        <div class="col-span-6">
        <img src="../assets/photos/sign.jpeg" alt="" class="shadow-2xl rounded-r-md h-full object-cover">
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
           <Input v-model="first_name">
                <template #span>First Name</template>
           </Input>
           <Input v-model="last_name">
                <template #span>Last Name</template>
           </Input>
        </div>
        <div class="space-y-3">
            <Input :type="'wide'" v-model="educational_institut">
                <template #span>Educational Institute</template>
           </Input>
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