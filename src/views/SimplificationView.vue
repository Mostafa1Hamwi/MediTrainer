<script setup>
import Square from "../components/Square.vue"
import TextBox from "../components/TextBox.vue";
import iArrow from "../components/icons/iArrow.vue"
</script>

<template>
  <div >
<div class="flex space-x-20">
<!-- welcome Box -->
<Square :type="'simplification'">
  <template #heading>Text Simplification</template>
  <template #text>This tool is designed make a document easier to study by simplifying the overall structure of the text.
    Paste the text you want to simplify into the simplification box then click the simplify button and you're all set ! <br>
    <i>Note: The simplification process may take up to a minute. and the results may contain some inaccuracies.</i> </template>
</Square>

<TextBox :type="'simplification'"  />
</div>
</div>
<div class="absolute bottom-0">
<div class="flex ml-52 items-center">
<img src="../assets/photos/simplification.png" alt="" width="390" class="">
<iArrow :type="'simplification'"></iArrow>
</div>
</div>

</template>