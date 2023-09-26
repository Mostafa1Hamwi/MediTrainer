<!-- eslint-disable no-unused-vars -->
<script setup></script>
<template>
  <div class="mt-12 grid grid-cols-9">
    <div class="mt-12 absolute left-1/2 -ml-0.5 w-1 h-96 bg-blue-400"></div>
    <div class="space-y-8 col-span-4">
      <h1 class="text-4xl text-black font-bold mt-4">Who Are We ?</h1>
      <p class="text-lg text-black">
        MediTrainer is an itellegent medical training application that has been developed By a group
        of student at the Arab International University. The project is aimed to exploit AI
        techniques in order to help medical students empower their study and practical journey.
        <br />
        <br />

        MediTrainer services are 100% free for all users. <br />
        <br />
        Our Sevices lie under 3 main categories: Image Analysis, Text Summarization & Simplification
        and Converting text into graph.
      </p>
    </div>
    <div class="col-span-5">
      <img class="mx-auto mt-24" src="../assets/logoNoText.svg" alt="" width="175" />
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
