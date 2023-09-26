<script setup>
import router from '../router'
function logout() {
  localStorage.clear()
  router.push('/login')
}

const email = localStorage.getItem('email')
const first_name = localStorage.getItem('first_name')
</script>
<template>
  <h1 class="mt-12 text-4xl font-bold mb-4">My Profile</h1>
  <div class="text-center">
    <div
      class="w-52 h-52 inline-block p-1 rounded-full ring-2 ring-blue-400 dark:ring-gray-500 mx-auto"
    >
      <img
        src="../assets/photos/photo1.jpg"
        alt=""
        class="w-full h-full rounded-full object-cover"
      />
    </div>
    <div class="text-center mt-3">
      <h3 class="text-4xl font-bold">{{ first_name }}</h3>
      <p class="text-gray-500">{{ email }}</p>
      <p class="text-gray-400 text-sm">Joined 4 July 2023</p>
    </div>
    <div class="space-x-7 mt-5">
      <button
        @click="logout"
        class="py-2 px-4 w-28 text-white font-bold bg-red-600 hover:bg-red-700 self-center rounded-lg mt-4"
      >
        Logout
      </button>
    </div>
  </div>
</template>
