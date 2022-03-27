import { createApp } from 'vue'
import { router } from './routing/router'

import highlightDirective from './directives/highlight'
import outclickDirective from './directives/outclick'

import BaseSelect from './components/BaseSelect.vue'
import BaseSwitch from './components/BaseSwitch.vue'
import App from './App.vue'

import './styles/main.css'

const app = createApp(App)

app.use(router)

app.directive('highlight', highlightDirective)
app.directive('outclick', outclickDirective)

app.component('BaseSelect', BaseSelect)
app.component('BaseSwitch', BaseSwitch)

app.mount('#app')
