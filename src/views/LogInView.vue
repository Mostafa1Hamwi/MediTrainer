<script setup>
import Input from "../components/Input.vue"
import CustomButton from "../components/CustomButton.vue"
</script>
<template>
    <div class="grid grid-cols-9 h-screen" id="wide-div">
        <div class="col-span-6">
        <img src="../assets/photos/sign.jpeg" alt="" class="shadow-2xl rounded-lg">
    </div>
    <div class="col-span-2">
        <div class="ml-12 mt-24 space-y-8">
        <div>
        <img src="../assets/logoNoText.svg" alt="" class="mb-4 w-16">
        <h2 class="text-3xl font-bold">Hello Again</h2>
        <p class="text-gray-400">Welcome to MediTrainer !</p>
        </div>

        <div class="space-y-3">
        <div class="space-y-3">
           <Input :type="'wide'">
                <template #span>Email</template>
           </Input>
           <Input :type="'wide'">
                <template #span>Password</template>
           </Input>
        </div>
        <div class="flex space-x-2 items-center">
        <input type="checkbox" name="" id="">
        <p class="text-sm">Remember Me</p>
     </div>
        </div>

        <div class="space-y-2 inline-block">
        <CustomButton type="home"> <template #text>Sign In</template> </CustomButton>
        <p class="text-sm text-center">Don't Have an Account ? <span class="text-blue-700 underline"> <RouterLink to="/register">Sign Up </RouterLink> </span></p>
     </div>
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