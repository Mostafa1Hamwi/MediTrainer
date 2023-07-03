<script setup>
import Square from "../components/Square.vue"
import UploadBox from "../components/UploadBox.vue"
import iArrow from "../components/icons/iArrow.vue"
</script>

<template>
  <div>
<div class="flex space-x-20 ">
<!-- welcome Box -->
<Square :type="'image'">
  <template #heading>Image Analysis</template>
  <template #text>This tool is designed to help students analyze X-ray and CT-Scan images and so they can see real-life images for patients and practice on them.
    Upload the photo you want to analyze into the analysis box then click the Analyze button and you're all set ! <br>
    <i>Note: The Analysis process may take up to a minute.</i> </template>
</Square>

<UploadBox :type="'image'" />
</div>
</div>
<div class="absolute bottom-0">
<div class="flex ml-56 items-center">
<img src="../assets/photos/analysis.png" alt="" width="300" class="">
<iArrow :type="'image'"></iArrow>
</div>
</div>

</template>