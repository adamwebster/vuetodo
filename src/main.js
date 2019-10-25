import Vue from 'vue'
import App from './App.vue'
import About from './pages/about.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimesCircle, faCalendarCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const NotFound = { template: '<p>Page not found</p>'}

library.add(faTimesCircle, faCalendarCheck)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

const routes = {
  '/': App,
  '/about': About
}

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent() {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
})
