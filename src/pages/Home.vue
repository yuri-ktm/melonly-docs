<template>
  <section class="flex relative flex-col justify-center items-center w-full h-[calc(100vh-4rem)] md:h-[calc(100vh-17rem)] dark:bg-gray-800/60 overflow-x-hidden p-5 md:py-32 md:px-48">
    <h1 class="text-4xl font-bold font-nunito md:text-5xl text-center tracking-wide mb-10">
      The <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">modern</span> Node.js framework
    </h1>

    <div class="mb-20 md:mb-28">
      <RouterLink
        class="bg-gradient-to-r from-emerald-500 to-teal-500 inline-block cursor-pointer text-base px-4 md:px-6 py-3 rounded-xl text-white transition-all duration-300 hover:opacity-90 hover:-translate-y-1 select-none shadow-lg shadow-emerald-500/20 outline-none focus-visible:ring-2 ring-offset-2 ring-offset-white dark:ring-offset-gray-900 focus-visible:ring-emerald-400"
        :to="`/docs/${DEFAULT_VERSION}/getting-started`"
      >
        Get Started
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </RouterLink>

      <a
        class="bg-slate-100 inline-block cursor-pointer text-base px-4 md:px-6 py-3 rounded-xl text-gray-500 transition-all duration-300 hover:opacity-90 hover:-translate-y-1 select-none ml-2 dark:bg-gray-700/80 dark:text-gray-50 outline-none focus-visible:ring-2 ring-offset-2 ring-offset-white dark:ring-offset-gray-900 focus-visible:ring-emerald-400"
        target="_blank"
        href="https://github.com/Doc077/melonly"
      >
        GitHub
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      </a>
    </div>

    <CodeBlock><span class="select-none mr-3">$</span>npm install -g @melonly/cli</CodeBlock>

    <svg xmlns="http://www.w3.org/2000/svg" class="absolute left-64 top-44 h-9 w-9 opacity-20 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg" class="absolute left-96 bottom-20 h-9 w-9 opacity-20 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg" class="absolute right-80 top-96 h-9 w-9 opacity-20 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
    </svg>
  </section>

  <section class="flex flex-col justify-center items-center w-full h-screen md:h-[calc(100vh-12rem)] bg-gray-900 text-gray-50 p-6 md:py-20 md:px-48">
    <h2 class="text-3xl font-nunito font-medium mb-8"><span class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Awesome</span> developer experience</h2>

    <p class="opacity-90 text-lg mb-10">Melonly focuses on elegant and simple syntax which scales well in larger projects.</p>

    <CodeBlock class="w-full bg-gray-800/70 w-auto">
      @Get('/')<br>
      public index(): ViewResponse {<br>
      &nbsp;&nbsp;return this.response.render('home', { message: 'Hello World' })<br>
      }
    </CodeBlock>
  </section>

  <section class="flex flex-col justify-center items-center w-full h-screen md:h-[calc(100vh-24rem)] dark:bg-gray-800/60 p-6 md:py-20 md:px-48">
    <h2 class="text-3xl font-nunito font-medium mb-12"><span class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Why</span> should you try Melonly?</h2>

    <div class="bg-slate-50 dark:bg-gray-900 flex items-center rounded-xl shadow-sm dark:shadow-lg p-4 mb-5">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-emerald-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
      </svg>

      <span class="opacity-90">Elegant code</span>
    </div>

    <div class="bg-slate-50 dark:bg-gray-900 flex items-center rounded-xl shadow-sm dark:shadow-lg p-4 mb-5">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-emerald-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
      </svg>

      <span class="opacity-90">Routing, authentication & more</span>
    </div>

    <div class="bg-slate-50 dark:bg-gray-900 flex items-center rounded-xl shadow-sm dark:shadow-lg p-4 mb-5">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-emerald-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
      </svg>

      <span class="opacity-90">Secure & scalable</span>
    </div>
  </section>

  <footer class="flex flex-col justify-center items-center w-full h-96 bg-gray-900 dark:bg-gray-900 text-center text-gray-50 p-2 md:p-3 md:py-32">
    <p class="opacity-80 mb-3">Copyright © 2022 Dominik Rajkowski</p>

    <p class="opacity-80">Melonly.js open-source framework is licensed under <a class="text-emerald-500 dark:text-emerald-400 hover:border-b border-emerald-500" href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a>.</p>
    <p class="opacity-80">Melonly logo created by <a class="text-emerald-500 dark:text-emerald-400 hover:border-b border-emerald-500" href="https://www.flaticon.com/free-icons/melon" target="_blank">Freepik - Flaticon</a></p>

    <p class="flex opacity-80 border border-dashed border-gray-500 rounded-xl px-5 py-3 mt-6">
      <img class="w-8 h-8 mr-3" src="/logo.png">

      <a class="text-emerald-500 dark:text-emerald-400 hover:border-b border-emerald-500 mr-3" href="https://github.com/Doc077/melonly" target="_blank">Melonly repository</a><a class="text-emerald-500 dark:text-emerald-400 hover:border-b border-emerald-500" href="https://github.com/Doc077/melonly-docs" target="_blank">Docs repository</a>
    </p>
  </footer>
</template>

<script setup> 
  import { usePageTitle } from '../composables/usePageTitle'
  import { DEFAULT_VERSION } from '../util/constants'
  import CodeBlock from '../components/CodeBlock.vue'

  usePageTitle('The Modern Node.js Framework')
</script>
