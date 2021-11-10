// 子模块goods
const goods = {
  namespaced: true, // 具有命名空间的state，后续都需要通过空间名称去访问
  state: {
    count: 10,
    price: 50
  },
  getters: {
    totalPrice(state) {
      return state.count * state.price
    }
  },
  mutations: {
    incCount(state, data) {
      state.count += data.step
    },
    decCount(state, data) {
      state.count -= data.step
    },
  }

}

export default goods
