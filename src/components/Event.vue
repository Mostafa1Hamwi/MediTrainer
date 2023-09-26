<script setup>
let props = defineProps(['type', 'tasks'])
import axios, { Axios } from 'axios'
import { ref } from 'vue'

const isEditing = ref(false)
const editedTitle = ref('')
const API_URL = 'http://192.168.5.1:8000'

async function deleteTask(task) {
  try {
    const response = await axios.delete(`${API_URL}/Tasks/${task.id}`)
    console.log(response)
    // remove the deleted task from the tasks array
    const index = props.tasks.indexOf(task)
    props.tasks.splice(index, 1)
  } catch (error) {
    console.error(error)
  }
}
</script>
<template>
  <div :key="task.id" v-for="task in tasks">
    <div
      :class="{
        'flex justify-between h-1/4 w-full  rounded-lg px-6 py-5 text-white mb-3': true,
        'bg-green-500': type == 'done',
        'bg-yellow-500': type == 'inProgress',
        'bg-red-600': type == 'toDo'
      }"
    >
      <div>
        <!-- <h5 class=" text-2xl font-semibold">{{ task.title }}</h5> -->
        <h5 v-if="!isEditing" class="text-2xl font-semibold" :class="{ 'text-black': isEditing }">
          {{ task.title }}
        </h5>
        <input
          v-else
          class="text-2xl font-semibold"
          v-model="editedTitle"
          @keydown.enter="saveTitle"
        />
        <div class="text-lg mt-1">
          <p class="text-base">Due to {{ task.end_date }}</p>
          <p class="text-sm">Category : Study</p>
        </div>
      </div>
      <div class="self-center space-x-3">
        <button
          @click="deleteTask(task)"
          :class="{
            'px-5 py-2 rounded-lg bg-white text-lg font-semibold self-center text-red-600': true
          }"
        >
          Delete Task
        </button>
      </div>
    </div>
  </div>
</template>
