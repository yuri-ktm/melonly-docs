import { kebabCase } from './kebabCase'

const syntaxes = {
  '<h1 class="text-2xl md:text-3xl font-bold mb-5">$1</h1>': /^# (.*)\r\n$/gm,

  '<h3 class="relative -left-3 md:-left-7 text-lg md:text-xl mt-16 mb-3"><span class="text-emerald-500 select-none mr-2">#</span>$1</h3>': /^### (.*)\r\n$/gm,

  '<em class="opacity-90">$1</em>': /\*(.*?)\*/gm,

  '<strong class="font-bold">$1</strong>': /\*\*(.*?)\*\*/gm,

  '<a class="text-emerald-500 dark:text-emerald-400 hover:border-b border-emerald-500" href="$2">$1</a>': /\[(.*?)\]\((.*?)\)/gm,

  '<div class="ml-8 md:my-2"><span class="text-emerald-500 text-sm font-medium">#</span> $1</div>': /^- (.*?)$/gm,

  '<div class="ml-14 md:my-2"><span class="text-emerald-500 text-sm font-medium">#</span> $1</div>': /^ *?- (.*?)$/gm,

  '<div class="relative group"><code class="block bg-gray-900 text-gray-50 text-sm leading-7 whitespace-pre overflow-auto rounded-xl shadow-lg px-7 py-5 dark:bg-gray-800 mt-3 mb-3">$1</code><svg xmlns="http://www.w3.org/2000/svg" class="absolute right-3 top-3 h-6 w-6 opacity-70 cursor-pointer hidden group-hover:block stroke-gray-50" fill="none" viewBox="0 0 24 24" stroke-width="2" title="Copy to clipboard"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg></div>': /```\r\n((.*?|\s*?)*?)\r\n```/gm,

  '<div class="my-10 border-2 border-yellow-500 rounded-lg dark:text-gray-50/80 bg-slate-50 dark:bg-gray-800 px-7 py-6" role="alert"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mb-2 stroke-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>$1</div>': /!!!\r\n((.*?|\s*?)*?)\r\n!!!/gm,

  '<div class="my-10 border-2 border-emerald-500 rounded-lg dark:text-gray-50/80 bg-slate-50 dark:bg-gray-800 px-7 py-6" role="alert"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mb-2 stroke-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>$1</div>': /\?\?\?\r\n((.*?|\s*?)*?)\r\n\?\?\?/gm,

  '$1<code class="px-2 py-1 text-sm bg-slate-100 dark:bg-gray-800 rounded-md">$2</code>': /([^@])`(.*?)`/g,

  '<p class="mb-4 text-gray-700 dark:text-gray-300">$1</p>': /^% (.*)$/gm,

  '$1': /@(`.*?`)/g,
}

export const parseMarkdown = (markdown) => {
  let output = markdown

  for (const [replacement, regex] of Object.entries(syntaxes)) {
    output = output.replaceAll(regex, replacement)
  }

  /**
   * Add anchor links
   */
  for (const expression of output.matchAll(/^## ?(.*)\r\n$/gm) ?? []) {
    output = output.replace(expression[0], `<h2 class="relative -left-3 md:-left-7 text-xl md:text-2xl mt-16 mb-3" id="${kebabCase(expression[1].replaceAll(/\<(.*?)\>/g, '').replace('/', ''))}"><span class="text-emerald-500 select-none mr-2">#</span>${expression[1]}</h2>`)
  }

  return output
}
