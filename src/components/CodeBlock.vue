<template>
  <div class="relative group bg-gray-900 rounded-xl px-5 md:px-7 py-3 md:py-5 shadow-lg">
    <pre class="text-slate-300 text-sm leading-8 whitespace-pre overflow-hidden" v-highlight><slot></slot></pre>

    <div class="absolute right-3 top-3 opacity-70 cursor-pointer hidden group-hover:block rounded-md bg-gray-900 p-1" title="Copy to clipboard">
      <svg xmlns="http://www.w3.org/2000/svg" class="stroke-gray-50 w-6 h-6" fill="none" viewBox="0 0 24 24" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    </div>
  </div>
</template>
