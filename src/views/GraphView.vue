<script setup>
import Square from "../components/Square.vue"
import UploadBox from "../components/UploadBox.vue";
import iArrow from "../components/icons/iArrow.vue"
</script>

<template>
  <div >
<div class="flex space-x-20">
<!-- welcome Box -->
<Square :type="'graph'">
  <template #heading>Text To Graph</template>
  <template #text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</template>
</Square>

<UploadBox :type="'graph'"  />
</div>
</div>
<div class="absolute bottom-0">
<div class="flex ml-72 items-center">
<img src="../assets/photos/graph.png" alt="" width="260" class="">
<iArrow :type="'graph'"></iArrow>
</div>
</div>

</template>