import './styles/styles.scss'

import { createApp } from 'vue'
import App from './App.vue'
import VueLazyLoad from 'vue3-lazyload'

const app = createApp(App)
app.use(VueLazyLoad, {
  loading: '',
  error: '',
  lifecycle:{
    loading: (el) => {
      console.log('loading', el)
    },
    error: (el) => {
      console.log('error', el)
    },
    loaded: (el) => {
      console.log('loaded', el)
    }
  }
})
app.mount('#app')