import Vue from 'vue'
import App from '../components/app.vue'

document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(document.createElement('app'))
  const app = new Vue({
    el: 'app', 
    template: '<App/>',
    components: { App },
    render: h => h(App) })

  console.log(app)
})