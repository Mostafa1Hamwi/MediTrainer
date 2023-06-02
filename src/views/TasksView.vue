<script setup>
import TaskIcon from '../components/TaskIcon.vue';
import Event from '../components/Event.vue'
import AddTask from '../components/AddTask.vue';
import { ref } from 'vue';
 let showAddTask=ref(false)
 

</script>
<template>
    <div class="flex space-x-10">
        <h2 class="text-4xl font-bold my-10">Task Tracker</h2>
        <button class="flex items-center py-2 px-4 text-white font-bold bg-blue-400 hover:bg-blue-500 self-center rounded-lg" @click="showAddTask=!showAddTask">Add Task <img src="../assets/add.svg" alt="" class="ml-3"> </button>
    </div>
    <div class="grid grid-cols-2">
        <div >
            <div v-if="showAddTask">
                <AddTask></AddTask>
            </div>
            <div v-else class="space-y-10">
                <TaskIcon :type="'toDo'">
                <template #icon> <img src="../assets/alarm.svg" alt="" class="mb-2"></template>
                </TaskIcon>
                <TaskIcon :type="'inProgress'">
                <template #icon> <img src="../assets/progress.svg" alt="" class="mb-2"></template>
                </TaskIcon>
                <TaskIcon :type="'done'">
                <template #icon> <img src="../assets/done.svg" alt="" class="mb-2"></template>
                </TaskIcon>
            </div>
        </div>

        <div class="self-start">
                <h3 class="text-4xl font-bold mb-10">Upcoming Events</h3>

                <!-- Event Box -->
                <Event :type="'done'"></Event>
                <Event :type="'toDo'" class="mt-2"></Event>
                <Event :type="'toDo'" class="mt-2"></Event>

                
                
            </div>
    </div>


</template>