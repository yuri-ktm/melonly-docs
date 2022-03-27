const keywords = [
  'cd ',
  'constructor',
  'each',
  'else',
  'from',
  'if',
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
      content = content.replaceAll(additional, `<span class="text-slate-50/70">${additional}</span>`)
    }

    for (const comment of comments) {
      content = content.replaceAll(comment, `<span class="text-slate-50/60 italic">$1</span>`)
    }

    for (const type of types) {
      content = content.replaceAll(type, `<span class="text-purple-300">${type}</span>`)
    }

    /**
     * Melon templates
     */
    content = content.replaceAll(/(\[\/?)/g, `<span class="text-slate-50/60">$1</span>`)
    content = content.replaceAll(/(\[\/?.*?)\]/g, `$1<span class="text-slate-50/60">]</span>`)

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
