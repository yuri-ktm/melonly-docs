<template>
  <header>
    <nav class="fixed left-0 top-0 flex justify-between items-center bg-white/95 dark:bg-gray-900/70 backdrop-blur w-full h-16 px-4 md:px-28 shadow shadow-slate-500/10 dark:shadow-none z-20">
      <RouterLink class="flex items-center" to="/">
        <img class="w-7 md:w-8" src="/logo.png" alt="Logo">

        <span class="font-bold text-xl ml-3 hidden md:inline">Melonly</span>

        <span class="opacity-80 text-sm ml-2 hidden md:inline">alpha</span>
      </RouterLink>

      <div class="flex items-center">
        <RouterLink
          class="block relative hover:bg-slate-100 dark:hover:bg-gray-800 rounded-md px-3 py-1 mx-1"
          :class="{
            'before:bg-gradient-to-b before:from-emerald-400 before:to-teal-400 before:w-4 before:h-1 before:absolute before:left-6 before:top-8 before:block before:rounded-md bg-slate-100 dark:bg-gray-800': $route.path.includes('docs')
          }"
          to="/docs"
        >
          Docs
        </RouterLink>

        <a
          class="block relative hover:bg-slate-100 dark:hover:bg-gray-800 rounded-md px-3 py-1 mx-1"
          href="https://github.com/Doc077/melonly"
          target="_blank"
        >GitHub</a>

        <button class="ml-4 md:ml-8 mr-3 md:mr-4 cursor-default">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </button>

        <BaseSwitch title="Toggle dark mode" @toggle="toggleTheme" :enabled="darkModeEnabled()" />
      </div>
    </nav>
  </header>
</template>

<script setup>
  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark')

    document.documentElement.classList.contains('dark')
      ? localStorage.setItem('theme', 'dark')
      : localStorage.setItem('theme', 'light')
  }

  const darkModeEnabled = () => {
    return document.documentElement.classList.contains('dark')
  }
</script>
