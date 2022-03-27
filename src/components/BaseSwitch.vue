<template>
  <label class="flex justify-between items-center w-full select-none cursor-pointer">
    <div>{{ label }}</div>

    <div class="relative inline-block w-12 h-6">
      <input class="peer sr-only" type="checkbox" :checked="enabled" @change="$emit('toggle')">

      <span class="
        absolute
        inset-0
        bg-slate-300/70
        dark:bg-gray-600
        rounded-xl
        cursor-pointer
        transition-transform
        before:absolute
        before:top-1
        before:left-1
        before:w-4
        before:h-4
        before:bg-gray-50
        before:rounded-full
        before:transition-transform
        peer-checked:bg-emerald-500
        peer-checked:before:transform
        peer-checked:before:translate-x-6"
      />
    </div>
  </label>
</template>

<script setup>
  const { label, enabled } = defineProps({
    label: String,
    enabled: Boolean,
  })

  defineEmits(['toggle'])
</script>
