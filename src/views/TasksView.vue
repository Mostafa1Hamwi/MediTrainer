<script setup>
import TaskIcon from '../components/TaskIcon.vue'
import Event from '../components/Event.vue'
import AddTask from '../components/AddTask.vue'
import axios, { Axios } from 'axios'
import { ref, onMounted } from 'vue'
let showAddTask = ref(false)
const API_URL = 'http://192.168.5.1:8000'
const tasks = ref([])
onMounted(fetchTasks)

async function fetchTasks() {
  axios.get(`${API_URL}/Tasks/`).then((response) => {
    tasks.value = response.data
  })
}
</script>

<template>
  <div class="flex space-x-10">
    <h2 class="text-4xl font-bold my-10">Task Tracker</h2>
    <button
      class="flex items-center py-2 px-4 text-white font-bold bg-blue-400 hover:bg-blue-500 self-center rounded-lg"
      :class="{
        ' bg-red-500 hover:bg-red-600': showAddTask,
        ' bg-blue-400 hover:bg-blue-500': !showAddTask
      }"
      @click="showAddTask = !showAddTask"
    >
      {{ showAddTask ? 'Close' : 'Add Task' }}
    </button>
  </div>
  <div class="grid grid-cols-2">
    <div>
      <div v-if="showAddTask">
        <AddTask :tasks="tasks"></AddTask>
      </div>
      <div v-else class="space-y-10">
        <TaskIcon :type="'toDo'">
          <template #icon> <img src="../assets/alarm.svg" alt="" class="mb-2" /></template>
        </TaskIcon>
        <TaskIcon :type="'inProgress'">
          <template #icon> <img src="../assets/progress.svg" alt="" class="mb-2" /></template>
        </TaskIcon>
        <TaskIcon :type="'done'">
          <template #icon> <img src="../assets/done.svg" alt="" class="mb-2" /></template>
        </TaskIcon>
      </div>
    </div>

    <div class="self-start">
      <h3 class="text-4xl font-bold mb-10">Upcoming Events</h3>
      <Event :type="'done'" :tasks="tasks"></Event>
    </div>
  </div>
</template>
