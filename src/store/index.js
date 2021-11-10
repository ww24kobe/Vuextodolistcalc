import Vue from "vue"

// 导入Vuex状态（数据）管理
import Vuex from "vuex"
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex); // this.$store.XXX


// 导入子模块goods
import goods from "@/store/modules/goods.js"
import todo from "@/store/modules/todo.js"
// 导入根store中的state
import state from "@/store/state.js"
// 导入根store中的mutations
import mutations from "@/store/mutations.js"
// 导入根store中的getters
import getters from "@/store/getters.js"
// 导入根store中的actions
import actions from "@/store/actions.js"

// 创建store仓库实例
const store = new Vuex.Store({
  // 以下都是全局的状态
  // state状态（即共享的数据）
  // 调用： this.$store.state.xxx
  modules: {
    // 模块空间名：对象
    goods,todo
  },
  state,
  // mutation: 同步修改数据。修改state中的数据的唯一途径。
  // 调用： this.$store.commit('incCount',参数（唯一）)
  mutations,
  // getters对state中的数据进行筛选之后返回(类似于计算属性computed)
  // 调用： this.$store.getters.xxxxxx
  getters,
  // 采用异步去修改数据，但是最终还是要调用mutations中的方法来修改
  // 调用： this.$store.dispath('changePrice',参数)
  actions,
  plugins: [createPersistedState({
    key: 'myvuex'
  })]
})

export default store;
