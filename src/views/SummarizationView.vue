<script setup>
import Square from "../components/Square.vue"
import TextBox from "../components/TextBox.vue"
import iArrow from "../components/icons/iArrow.vue"
</script>

<template>
  <div >
<div class="flex space-x-20">
<!-- welcome Box -->
<Square :type="'summarization'">
  <template #heading>Text Summarization</template>
  <template #text>This tool is designed to turn a document into a shorter concise and fluent summary while preserving key information content and overall meaning automatically.
    Paste the text you want to summarize into the summarization box then click the summarize button and you're all set ! <br>
    <i>Note: The summarization process may take up to a minute. and the results may contain some inaccuracies.</i> 
      </template>
</Square>

<TextBox :type="'summarization'"  />
</div>
</div>
<div class="absolute bottom-0">
<div class="flex ml-52 items-center">
<img src="../assets/photos/summarization.png" alt="" width="375" class="">
<iArrow :type="'summarization'"></iArrow>
</div>
</div>

</template>