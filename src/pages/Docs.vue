<template>
  <section class="flex flex-col items-center w-full p-6 md:py-20 md:px-48">
    <nav
      class="fixed right-3 top-16 md:left-0 md:right-unset md:visible flex flex-col w-80 h-full md:4/5 overflow-auto bg-slate-100 dark:bg-gray-800 md:dark:bg-gray-800/80 rounded-lg md:rounded-none shadow-xl md:shadow-none px-10 py-8 z-20"
      :class="{ 'visible': showMenu, 'invisible': !showMenu }"
      @click="showMenu = false"
    >
      <div class="mb-6">
        <span class="text-sm mr-3">Version</span>

        <BaseSelect
          :options="{
            '1.x': '1.x',
          }"
          :defaultOption="DEFAULT_VERSION"
        />
      </div>

      <RouterLink
        class="relative md:px-2 md:py-1 my-1 opacity-80 hover:opacity-95 transition-transform duration-300 hover:translate-x-1 outline-none rounded-lg focus-visible:ring-2 ring-emerald-400"
        :class="{ 'before:bg-emerald-500 before:w-1 before:h-4 before:absolute before:-left-3 md:before:-left-2 before:top-2 md:before:top-3 before:block before:rounded-md opacity-95': $route.path.includes(`/${kebabCase(item)}`) }"
        v-for="(item, index) in menuItems"
        :to="kebabCase(item)"
        :key="index"
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

    <section class="w-full md:w-1/2" v-html="parseMarkdown(markdown)"></section>
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

  usePageTitle('Documentation')

  const fetchDocs = async (version, section) => {
    try {
      const result = await axios.get(`/markdown/${version}/${section}.md`)

      markdown.value = result.data
    } catch (error) {
      console.warn(error)
    }
  }

  const toggleMenu = () => {
    showMenu.value = !showMenu.value
  }

  onBeforeRouteUpdate(async (to) => {
    fetchDocs(to.params.version, to.params.section)
  })

  fetchDocs(route.params.version, route.params.section)
</script>
