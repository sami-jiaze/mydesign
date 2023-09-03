import { createApp } from 'vue'
import App from './App.vue'
import MyIcon from '@mydesign/components/icon'
import '@mydesign/theme-chalk/src/index.scss'

const app = createApp(App)
app.use(MyIcon)
app.mount('#app')
