const syntaxes = {
  '<h1 class="text-2xl md:text-3xl font-medium mb-5">$1</h1>': /^# (.*)\r\n$/gm,

  '<h2 class="relative -left-3 md:-left-7 text-xl md:text-2xl mt-16 mb-3"><span class="text-emerald-500 select-none mr-2">#</span>$1</h2>': /^## (.*)\r\n$/gm,

  '<h3 class="relative -left-3 md:-left-7 text-lg md:text-xl mt-16 mb-3"><span class="text-emerald-500 select-none mr-2">#</span>$1</h3>': /^### (.*)\r\n$/gm,

  '<em class="opacity-90">$1</em>': /\*(.*?)\*/gm,

  '<strong class="font-bold">$1</strong>': /\*\*(.*?)\*\*/gm,

  '<a class="text-emerald-500 dark:text-emerald-400 hover:border-b border-emerald-500" href="$2" target="_blank">$1</a>': /\[(.*?)\]\((.*?)\)/gm,

  '<div class="ml-8 md:my-2"><span class="text-emerald-500 text-sm font-medium">#</span> $1</div>': /^- (.*?)$/gm,

  '<div class="ml-14 md:my-2"><span class="text-emerald-500 text-sm font-medium">#</span> $1</div>': /^ *?- (.*?)$/gm,

  '<code class="prettyprint relative block group bg-gray-900 text-gray-50 text-sm leading-7 whitespace-pre overflow-auto rounded-xl shadow-lg px-7 py-5 dark:bg-gray-800 mt-5 mb-3">$1<svg xmlns="http://www.w3.org/2000/svg" class="absolute right-3 top-3 h-6 w-6 opacity-70 cursor-pointer hidden group-hover:block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" title="Copy to clipboard"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg></code>': /```\r\n((.*?|\s*?)*?)\r\n```/gm,

  '<code class="px-2 py-1 text-sm bg-slate-100 dark:bg-gray-800 rounded-md">$1</code>': /`(.*?)`/g,

  '<p class="mb-2 text-gray-700 dark:text-gray-300">$1</p>': /^% (.*)$/gm,
}

export const parseMarkdown = (markdown) => {
  let output = markdown

  for (const [replacement, regex] of Object.entries(syntaxes)) {
    output = output.replaceAll(regex, replacement)
  }

  return output
}
