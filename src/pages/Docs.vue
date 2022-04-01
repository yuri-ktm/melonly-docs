<template>
  <section class="flex flex-col items-center w-full p-6 md:py-20 md:px-48">
    <nav
      class="fixed right-3 top-16 md:left-0 md:right-unset md:visible flex flex-col w-80 h-[calc(100%-5rem)] md:h-full overflow-auto bg-slate-100 dark:bg-gray-800 md:dark:bg-gray-800/80 rounded-lg md:rounded-none shadow-xl md:shadow-none px-10 py-8 z-20"
      :class="{ 'visible': showMenu, 'invisible': !showMenu }"
    >
      <div class="mb-6">
        <span class="text-sm mr-3">Version</span>

        <BaseSelect
          :options="{
            '1.x': '1.x',
          }"
          :default-option="DEFAULT_VERSION"
        />
      </div>

      <RouterLink
        class="relative md:px-2 my-1 opacity-80 hover:opacity-95 transition-transform duration-300 hover:translate-x-1 outline-none rounded-lg focus-visible:ring-2 ring-emerald-400"
        :class="{ 'before:bg-emerald-500 before:w-1 before:h-4 before:absolute before:-left-3 before:top-2 before:block before:rounded-md before:bg-gradient-to-b before:from-emerald-400 before:to-teal-400 opacity-95': $route.path.includes(`/${kebabCase(item)}`) }"
        :to="kebabCase(item)"
        v-for="(item, index) in menuItems"
        :key="index"
        @click="showMenu = false"
      >{{ item }}</RouterLink>
    </nav>

    <svg
      class="fixed right-6 top-20 h-6 w-6 z-20 md:hidden"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
      @click="toggleMenu"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
    </svg>

    <section class="w-full md:w-1/2">
      <div class="flex justify-center mt-20" v-if="loading">
        <div class="w-9 h-9 rounded-full border-4 border-slate-200 border-r-emerald-500 animate-spin dark:border-gray-800 dark:border-r-emerald-400"></div>
      </div>

      <div v-html="parseMarkdown(markdown)" v-if="!loading"></div>

      <footer class="flex flex-col justify-center items-center text-sm md:text-base w-screen -ml-6 md:ml-0 md:w-full h-56 bg-slate-100 dark:bg-gray-800/80 md:rounded-lg p-6 mt-32">
        <p class="opacity-80 mb-3">Copyright © 2022 Dominik Rajkowski</p>

        <p class="opacity-80">Melonly.js open-source framework is licensed under <a class="text-emerald-500 dark:text-emerald-400 hover:border-b border-emerald-500" href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a>.</p>
        <p class="opacity-80">Melonly logo created by <a class="text-emerald-500 dark:text-emerald-400 hover:border-b border-emerald-500" href="https://www.flaticon.com/free-icons/melon" target="_blank">Freepik - Flaticon</a></p>

        <p class="flex items-center opacity-80 border border-dashed border-gray-500 rounded-xl px-5 py-3 mt-6">
          <img class="w-8 h-8 mr-3" src="/logo.png">

          <a class="text-emerald-500 dark:text-emerald-400 hover:border-b border-emerald-500 mr-3" href="https://github.com/Doc077/melonly" target="_blank">Melonly repository</a><a class="text-emerald-500 dark:text-emerald-400 hover:border-b border-emerald-500" href="https://github.com/Doc077/melonly-docs" target="_blank">Docs repository</a>
        </p>
      </footer>
    </section>
  </section>
</template>

<script setup>
  import { ref } from 'vue'
  import { useRoute, onBeforeRouteUpdate } from 'vue-router'
  import { usePageTitle } from '../composables/usePageTitle'
  import { parseMarkdown } from '../util/parseMarkdown'
  import { kebabCase } from '../util/kebabCase'
  import { DEFAULT_VERSION } from '../util/constants'
  import axios from 'axios'

  const menuItems = [
    'Installation',
    'Directory Structure',
    'Configuration',
    'Controllers and Routing',
    'Views',
    'Services',
    'HTTP',
    'Session',
    'Dependency Injection',
    'Encryption and Hashing',
    'Mail',
    'Websockets and Broadcasting',
    'Command Line Interface',
    'Testing',
  ]

  const route = useRoute()
  const markdown = ref('')
  const section = route.params.section
  const showMenu = ref(false)
  const loading = ref(true)

  usePageTitle('Documentation')

  const fetchDocs = async (version, section) => {
    loading.value = true

    try {
      const result = await axios.get(`/markdown/${version}/${section}.md`)

      markdown.value = result.data
    } catch (error) {
      console.warn(error)

      return
    }

    loading.value = false
  }

  const toggleMenu = () => {
    showMenu.value = !showMenu.value
  }

  onBeforeRouteUpdate(async (to) => {
    if (to.path === route.path) return

    fetchDocs(to.params.version, to.params.section)
  })

  fetchDocs(route.params.version, route.params.section)

  loading.value = false
</script>
