const keywords = [
  'cd ',
  'constructor',
  'each',
  'from',
  'import',
  'in ',
  'melon ',
  'npm',
  'private',
  'protected',
  'public',
  'return',
  'this',
]

const types = [
  'boolean',
  'number',
  'string',
  'RedirectResponse',
  'ViewResponse',
]

const additionals = [
  '-g',
  '-v',
  '--version',
]

const comments = [
  /(\/\/.*?)/gm,
  /(\/\* ?.*? ?\*\/)/gm,
  /(# ?.*?)/gm,
]

const signs = ['.', '@', ':', '(', ')', '[', ']', '{', '}']

const literals = [
  /(')(.*?)'/gm,
  /(`)(.*?)`/gm,
]

export default {
  mounted(el) {
    let content = el.innerHTML

    for (const keyword of keywords) {
      content = content.replaceAll(keyword, `<span class="text-pink-400">${keyword}</span>`)
    }

    for (const additional of additionals) {
      content = content.replaceAll(additional, `<span class="opacity-80">${additional}</span>`)
    }

    for (const comment of comments) {
      content = content.replaceAll(comment, `<span class="opacity-70 italic">$1</span>`)
    }

    for (const sign of signs) {
      content = content.replaceAll(sign, `<span class="text-gray-200">${sign}</span>`)
    }

    for (const type of types) {
      content = content.replaceAll(type, `<span class="text-purple-300">${type}</span>`)
    }

    /**
     * Literals
     */
    for (const literal of literals) {
      for (const expression of content.matchAll(literal) ?? []) {
        content = content.replaceAll(expression[0], `<span class="text-sky-300">${expression[1]}${expression[2]}${expression[1]}</span>`)
      }
    }

    el.innerHTML = content
  }
}
