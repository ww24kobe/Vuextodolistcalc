export default {
  changePrice({
    state,
    commit
  }) {
    // context当前store上文对象
    setTimeout(() => {
      // 但是最终还是要调用mutations中的方法来修改
      commit('changePrice', {
        price: state.price += 10
      })
    }, 400);

  }
}
