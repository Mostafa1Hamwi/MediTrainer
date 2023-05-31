<script>
import { RouterLink } from "vue-router";
</script>
<template>
    <div class="h-40 overflow-auto bg-blue-400 rounded-2xl px-8 py-4 text-white shadow-xl ">
        <div class="flex mt-1.5"> 
        <h2 class=" font-bold text-3xl ">Keep Track of Your Tasks</h2>
        <img alt="" src="@/assets/clock.svg" width="35" height="35" class="ml-4" />
    </div>
    <div class="flex justify-between items-start">
    <p class="max-w-3xl mt-1.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Excepteur sint occaecat cupidatat non proident,</p>

    <!-- Button needs to be extracted into its own component -->
   <RouterLink to="/tasks"><button class="mr-10 bg-white text-blue-400 px-24 text-lg font-bold rounded-2xl py-2 mt-2 shadow-lg">Start Tracking</button></RouterLink> 
</div>

    </div>
</template>