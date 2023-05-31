<script setup>
let props=defineProps(['type'])

</script>
<template>
    <div >
        <svg xmlns="http://www.w3.org/2000/svg" width="155" height="172.162" viewBox="0 0 244.475 172.162">
  <g id="Group_6" data-name="Group 6" transform="matrix(0.358, 0.934, -0.934, 0.358, 230.536, -10.504)">
    <g id="Polygon_1" data-name="Polygon 1" transform="translate(0 29.311) rotate(-37)" fill="none" stroke-linecap="round">
      <path d="M23.484,1.519a1,1,0,0,1,1.736,0l22.629,39.6a1,1,0,0,1-.868,1.5H1.723a1,1,0,0,1-.868-1.5Z" stroke="none"/>
      <path d="M 24.35211181640625 4.031120300292969 L 3.446357727050781 40.61617279052734 L 45.25785446166992 40.61617279052734 L
       24.35211181640625 4.031120300292969 M 24.35210990905762 1.01556396484375 C 24.69025993347168 1.01556396484375 25.02840614318848 1.183517456054688 25.22035217285156 1.519420623779297 L 47.84928131103516 41.12003326416016 C 48.23023223876953 41.78668975830078 47.74886322021484 42.61617279052734 46.98104095458984 42.61617279052734 L 1.723182678222656 42.61617279052734 
       C 0.955352783203125 42.61617279052734 0.4739913940429688 41.78668975830078 0.8549423217773438 41.12003326416016 L 23.48386192321777 1.519420623779297
        C 23.67581176757812 1.183517456054688 24.01396179199219 1.01556396484375 24.35210990905762 1.01556396484375 Z" stroke="none"
         :class="{
        'flex justify-center items-center h-64 bg-blue-50 border-4 border-dashed rounded-xl mt-7 text-center':true,
        'fill-blue-400': type == 'home',
        'fill-green-500': type == 'summarization',
        'fill-red-500': type == 'simplification',
        'fill-indigo-700': type == 'image',
        'fill-yellow-500': type == 'graph',
    }" />
    </g>
    <path id="Path_2" data-name="Path 2" d="M3.679,207.612S93.693,116,0,0" transform="translate(50.068 56.591)" fill="none"  :class="{
        'flex justify-center items-center h-64 bg-blue-50 border-4 border-dashed rounded-xl mt-7 text-center':true,
        'stroke-blue-400': type == 'home',
        'stroke-green-500': type == 'summarization',
        'stroke-red-500': type == 'simplification',
        'stroke-indigo-700': type == 'image',
        'stroke-yellow-400': type == 'graph',
    }"  stroke-linecap="round" stroke-width="2"/>
  </g>
</svg>
    </div>
  </template>
  
 