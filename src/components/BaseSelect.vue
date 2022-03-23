<template>
  <div class="relative inline-block text-sm select-none mt-3" role="listbox" v-outclick="close">
    <div class="bg-slate-200 dark:bg-gray-700 inline-block px-3 py-2 rounded-lg cursor-pointer focus-visible:ring-4 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-opacity-40 dark:ring-offset-gray-900" tabindex="0" @click="open = !open">
      {{ options[selected] }}

      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </div>

    <div class="absolute left-0 bg-white dark:bg-gray-800 px-2 py-2 w-auto rounded-md shadow-lg overflow-x-hidden overflow-y-auto mt-2 z-40" v-if="open">
      <div
        class="px-3 py-2 rounded-md cursor-pointer hover:bg-slate-200 dark:hover:bg-gray-700"
        :class="{ 'bg-slate-200 dark:bg-gray-700': key === selected }"
        role="option"
        v-for="(option, key) in options"
        v-html="option"
        @click="selectOption(key)"
        :key="key"
      />
    </div>

    <select :name="name" v-if="name" hidden>
      <option :value="key" :selected="selected === key" v-for="(option, key) in options" :key="key">
        {{ key }}
      </option>
    </select>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const { name, options, defaultOption } = defineProps({
    name: {
      type: [String, Boolean],
      default: false,
    },
    options: Object,
    defaultOption: String,
  })

  const emit = defineEmits(['select'])

  let open = ref(false)
  let selected = ref(defaultOption)

  const selectOption = option => {
    selected.value = option

    open.value = false

    emit('select')
  }

  const close = () => {
    open.value = false
  }
</script>
