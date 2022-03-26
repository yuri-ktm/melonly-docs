<template>
  <pre class="bg-gray-900 text-gray-50 text-sm leading-8 whitespace-pre overflow-hidden rounded-xl shadow-lg px-5 md:px-7 py-3 md:py-5" ref="container"><slot></slot></pre>
</template>

<script setup>
  import { ref, onMounted } from 'vue'

  const container = ref(null)

  const keywords = [
    'npm',
    'private',
    'protected',
    'public',
    'return',
    'this',
  ]

  const types = [
    'number',
    'string',
    'ViewResponse',
  ]

  const additionals = [
    '-g',
    /^\/\/(.*?)/gm,
  ]

  const signs = ['.', '@', ':', '(', ')', '[', ']', '{', '}']

  const literals = [
    /(')(.*?)'/gm,
    /(`)(.*?)`/gm,
  ]

  onMounted(() => {
    let content = container.value.innerHTML

    for (const keyword of keywords) {
      content = content.replaceAll(keyword, `<span class="text-pink-400">${keyword}</span>`)
    }

    for (const additional of additionals) {
      content = content.replaceAll(additional, `<span class="opacity-70 italic">${additional}</span>`)
    }

    for (const sign of signs) {
      content = content.replaceAll(sign, `<span class="text-gray-200">${sign}</span>`)
    }

    for (const type of types) {
      content = content.replaceAll(type, `<span class="text-teal-400">${type}</span>`)
    }

    /**
     * Literals
     */
    for (const literal of literals) {
      for (const expression of content.matchAll(literal) ?? []) {
        content = content.replaceAll(expression[0], `<span class="text-sky-300">${expression[1]}${expression[2]}${expression[1]}</span>`)
      }
    }

    container.value.innerHTML = content
  })
</script>
