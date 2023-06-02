<script setup>
import Input from "../components/Input.vue"
</script>
<template>
    <div class="border-4 border-blue-400 rounded-lg overflow-x-auto inline-block p-5" >
    <form action="#">
        <div class="space-y-4">
         <Input>
                <template #span>Title</template>
           </Input>
           <p>Description</p>
           <textarea name="" id="" cols="40" rows="4"></textarea>
           <div class="flex space-x-6">
           <Input :inputType="'date'">
                <template #span>Start Date</template>
           </Input>
           <Input :inputType="'date'">
                <template #span>End Date</template>
           </Input>
        </div>
        <Input :type="'wide'">
        <template #span>Category</template>
        </Input>
    </div>
    <button class=" items-center py-2 px-4 text-white font-bold bg-blue-400 hover:bg-blue-500 text-lg rounded-lg mt-6 shadow-lg w-full ">Add Task</button>    
    </form>

</div>
</template>