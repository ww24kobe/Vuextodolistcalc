export default {
  incCount(state, data) {
    state.count += data.step
  },
  decCount(state, data) {
    state.count -= data.step
  },
  changePrice(state, data) {
    state.price = data.price
  }
}
