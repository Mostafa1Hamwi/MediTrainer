<script setup>
import Input from "../components/Input.vue"
import CustomButton from "../components/CustomButton.vue"
import { ref } from "vue"
import axios, { Axios } from "axios"
const email=ref("")
const password=ref("")

async function handleSubmit(){
    console.log("submitted")
    const data={
     email:email.value,
     password:password.value
    }

    axios.post('http://192.168.1.7:8000/Accounts/jwt/create/',data).then((response)=>{
    console.log(response)
    })

    // axios.post('http://192.168.1.7:8000/Accounts/jwt/create/', {
    //   userId: '1',
    //   title:  'Article title',
    //   body:   'Article body content'
    // })
    // .then((response) => console.log(response))
  
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
        <h2 class="text-3xl font-bold">Hello Again</h2>
        <p class="text-gray-400">Welcome to MediTrainer !</p>
        </div>

        <form @submit.prevent="handleSubmit">
        <div class="space-y-3">
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
        <p class="text-sm">Remember Me</p>
     </div>
        </div>

        <div class="space-y-2 inline-block mt-3">
        <CustomButton type="home"> <template #text>Sign In</template> </CustomButton>
        <p class="text-sm text-center">Don't Have an Account ? <span class="text-blue-700 underline"> <RouterLink to="/register">Sign Up </RouterLink> </span></p>
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