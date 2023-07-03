<script setup>
import Square from "../components/Square.vue"
import TextBox from "../components/TextBox.vue";
import iArrow from "../components/icons/iArrow.vue"
</script>

<template>
  <div >
<div class="flex space-x-20">
<!-- welcome Box -->
<Square :type="'graph'">
  <template #heading>Text To Graph</template>
  <template #text>This tool is designed to turn a document into easy good-looking graphs that makes the learning experience more focused.
    Paste the text you want to transform into the transformation box then click the draw button and you're all set ! <br>
    <i>Note: The transformation process may take up to a minute. and the results may contain some inaccuracies.</i> </template>
</Square>

<TextBox :type="'graph'"  />
</div>
</div>
<div class="absolute bottom-0">
<div class="flex ml-72 items-center">
<img src="../assets/photos/graph.png" alt="" width="250" class="">
<iArrow :type="'graph'"></iArrow>
</div>
</div>

</template>