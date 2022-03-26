<template>
  <section class="flex flex-col justify-center items-center w-full h-[calc(100vh-14rem)] p-5 md:py-32 md:px-48">
    <h1 class="text-5xl font-medium font-bebas md:text-6xl tracking-wide mb-10">
      The <span class="text-emerald-500 dark:text-emerald-400">modern</span> Node.js framework
    </h1>

    <div class="mb-20 md:mb-28">
      <RouterLink
        class="bg-emerald-500 inline-block cursor-pointer text-base px-4 md:px-6 py-3 rounded-xl text-white transition-all duration-300 hover:opacity-90 hover:-translate-y-2 select-none shadow-lg shadow-emerald-500/20 outline-none focus:ring-2 ring-offset-2 ring-offset-white dark:ring-offset-gray-900 focus:ring-emerald-400"
        :to="`/docs/${DEFAULT_VERSION}/installation`"
      >
        Installation
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </RouterLink>

      <RouterLink
        class="bg-slate-100 inline-block cursor-pointer text-base px-4 md:px-6 py-3 rounded-xl text-gray-500 transition-all duration-300 hover:opacity-90 hover:-translate-y-2 select-none ml-2 dark:bg-gray-800 dark:text-gray-50 outline-none focus:ring-2 ring-offset-2 ring-offset-white dark:ring-offset-gray-900 focus:ring-emerald-400"
        to="/docs"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
        Documentation
      </RouterLink>
    </div>

    <code class="prettyprint bg-gray-900 text-gray-50 text-sm leading-8 whitespace-pre overflow-hidden rounded-xl shadow-lg px-5 md:px-7 py-3 md:py-5 dark:bg-gray-800">$ npm install -g @melonly/cli<br class="md:hidden"><span class="hidden md:inline"> && </span>melon new my-app</code>
  </section>

  <section class="flex flex-col justify-center items-center w-full h-[calc(100vh-14rem)] bg-gray-900 dark:bg-gray-800/80 text-gray-50 p-6 md:py-32 md:px-48">
    <h2 class="text-3xl md:text-4xl mb-8"><span class="text-emerald-400">Awesome</span> developer experience</h2>

    <p class="opacity-90 text-lg mb-10">Melonly focuses on elegant and simple syntax which scales well in larger projects.</p>

    <pre class="prettyprint bg-gray-800 text-gray-50 text-sm leading-8 whitespace-pre overflow-x-auto w-full md:w-auto rounded-xl shadow-lg px-7 py-5 dark:bg-gray-900">@Get('/')
public index(): ViewResponse {
  return this.response.render('home', { message: 'Hello World' })
}
</pre>
  </section>

  <section class="flex flex-col justify-center items-center w-full h-[calc(100vh-24rem)] p-6 md:py-32 md:px-48">
    <h2 class="text-3xl md:text-4xl mb-12"><span class="text-emerald-500 dark:text-emerald-400">Why</span> should you try Melonly?</h2>

    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-emerald-400" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg><span class="opacity-90">Fast performance</span>

    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-emerald-400 mt-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg><span class="opacity-90">Many features out-of-the-box</span>

    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-emerald-400 mt-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg><span class="opacity-90">Secure</span>
  </section>

  <footer class="flex flex-col justify-center items-center w-full h-96 bg-gray-900 dark:bg-gray-800/80 text-center p-3 md:py-32 mt-32">
    <p class="opacity-80 mb-3">Copyright © 2022 Dominik Rajkowski</p>

    <p class="opacity-80">Melonly.js open-source framework is licensed under <a class="text-emerald-500 dark:text-emerald-400 hover:border-b border-emerald-500" href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a>.</p>
    <p class="opacity-80">Melonly logo created by <a class="text-emerald-500 dark:text-emerald-400 hover:border-b border-emerald-500" href="https://www.flaticon.com/free-icons/watermelon" target="_blank">Freepik - Flaticon</a></p>

    <p class="opacity-80 mt-3">
      <a class="text-emerald-500 dark:text-emerald-400 hover:border-b border-emerald-500 mr-3" href="https://github.com/Doc077/melonly" target="_blank">Melonly repository</a><a class="text-emerald-500 dark:text-emerald-400 hover:border-b border-emerald-500" href="https://github.com/Doc077/melonly-docs" target="_blank">Docs repository</a>
    </p>
  </footer>
</template>

<script setup>
  import { DEFAULT_VERSION } from '../util/constants'
</script>
