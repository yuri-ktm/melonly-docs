import { createApp } from 'vue'
import { router } from './routing/router'
import outclickDirective from './directives/outclick'
import BaseSwitch from './components/BaseSwitch.vue'
import App from './App.vue'
import './styles/main.css'

const app = createApp(App)

app.use(router)

app.directive('outclick', outclickDirective)
app.component('BaseSwitch', BaseSwitch)

app.mount('#app')
