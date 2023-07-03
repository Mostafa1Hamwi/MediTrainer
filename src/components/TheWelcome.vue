<script setup>
import Square from "./Square.vue"
import CoreIcon from "./CoreIcon.vue";
import TaskBar from './TaskBar.vue'
import { RouterLink } from 'vue-router'


</script>

<template>
  
  <div class="flex space-x-4 items-center mt-16">

  <!-- welcome Box -->
  <Square :type="'home'">
    <template #normalHeading>
      Welcome To
    </template>
    <template #heading>MediTrainer</template>
    <template #text>MediTrainer is a platform designed to help medical students in their learning journey, we offer several services that makes the learning experience easier and more focused.
       <br> Our platform is free to use and is the perfect place for medical students who want to succeed in their studies. With our help, you can learn more effectively, and stay more organized at the same time.</template>
  </Square>
  <!-- Arrow -->
  <div class="pl-8 pr-2">
  <img alt="" src="@/assets/arrow.svg" width="50" height="50" />
</div>

<!-- Core Features -->
  <RouterLink to="/summarization">
<CoreIcon type="summarization" class="relative left-8" >
  <template #icon>
    <img alt="" src="@/assets/textSummarization.svg" width="67" class="m-auto"/>
    </template>
  <template #text>Text Summarization</template>
</CoreIcon>
</RouterLink>

<div>
  <RouterLink to="/image">
<CoreIcon type="image" class="relative bottom-7">
  <template #icon>
    <img alt="" src="@/assets/imageAnalysis.svg" width="67" class="m-auto"/>
    </template>
  <template #text>Image Analysis</template>
</CoreIcon>
</RouterLink>

<RouterLink to="/graph">
<CoreIcon type="graph" class="relative top-7">
  <template #icon>
    <img alt="" src="@/assets/textToGraph.svg" width="67" class="m-auto"/>
    </template>
  <template #text>Text To Graph</template>
</CoreIcon>
</RouterLink>
</div>

<RouterLink to="/simplification">
<CoreIcon type="simplification" class="relative right-8">
  <template #icon>
    <img alt="" src="@/assets/textSimplification.svg" width="67" class="m-auto"/>
    </template>
  <template #text>Text Simplification</template>
</CoreIcon>
</RouterLink>

<!-- ///////////////////// -->
</div>

<!-- Task Bar -->
<section>
<TaskBar class="mx-auto mt-16" />
</section>

</template>
