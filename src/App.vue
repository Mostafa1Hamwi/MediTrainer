<script setup>
import { RouterLink, RouterView } from 'vue-router'
import DropDownMenu from '@/components/DropDownMenu.vue';

</script>

<template>
  <div class="max-w-7xl m-auto">
  <header v-if="!$route.meta.hideNavbar">
    <div>
      <nav class="flex justify-between px-10 py-6" >
        <div>
          <RouterLink to="/">
        <img alt="MediTrainer logo" class="logo" src="@/assets/logo.svg" width="155" height="155" />
      </RouterLink>
      </div>
      <div class="space-x-12 text-blue-400 ml-16 font-bold flex items-center">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
        <div><DropDownMenu /></div>
      </div>
      </nav>
    </div>
  </header>
  <RouterView />
</div>
</template>

