<script setup>
import { onUnmounted, ref } from 'vue'; 
import { RouterLink } from 'vue-router'

let isOpen = ref(false)
window.addEventListener('click', close)

function close(e) {
  if (isOpen.value) {
    if (!e.target.closest('#userDropdown') && !e.target.closest('#avatarButton')) {
      isOpen.value = false
    }
  }
}

onUnmounted(() => {
  window.removeEventListener('click', close)
})
</script>

<template>
  <img id="avatarButton" type="button" data-dropdown-toggle="userDropdown" data-dropdown-placement="bottom-start"
     class="w-10 h-10 rounded-full cursor-pointer object-cover" src="../assets/photos/profile.jpg" alt="User dropdown"  @click="isOpen=!isOpen">
  <!-- Dropdown menu -->
  <div id="userDropdown" class="mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute" v-show="isOpen">
    <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
      <div>Adrian Lee</div>
      <div class="font-medium truncate">AdrianLee@aiu.com</div>
    </div>
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
      <li>
        <RouterLink to="/profile">
          <p class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">View Profile</p>
        </RouterLink>
      </li>
    </ul>
    <div class="py-1">
      <a href="#" class="block px-4 py-2 text-sm text-red-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
    </div>
  </div>
</template>

