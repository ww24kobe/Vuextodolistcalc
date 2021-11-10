import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 导入css
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"


//导入store状态数据
import store from "@/store/index.js"

Vue.config.productionTip = false

new Vue({
  store, // 挂载根组件身上，其他组件才可以通过this.$store来进行调用
  router,
  render: h => h(App)
}).$mount('#app')
