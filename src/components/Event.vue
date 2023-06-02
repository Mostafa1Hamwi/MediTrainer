<script setup>
let props= defineProps(['type'])
</script>
<template>
    <div :class="{
        'flex justify-between h-1/4 w-full  rounded-lg px-6 py-5 text-white':true,
        'bg-green-500': type=='done',
        'bg-yellow-500': type=='inProgress',
        'bg-red-600': type=='toDo'

    }">
            <div>
            <h5 class=" text-2xl font-semibold">Do My Homework</h5>
            <div class=" text-lg mt-1 ">
            <p class=" text-base">Due to 20/10/2023</p>
            <p class=" text-sm">Category : Study</p>
        </div>
        </div>
        <button :class="{
            'px-10 py-2 rounded-lg bg-white text-lg font-semibold self-center' :true,
            'text-green-500': type=='done',
            'text-yellow-500': type=='inProgress',
            'text-red-600': type=='toDo'
        }">View Task</button>
        </div>
</template>