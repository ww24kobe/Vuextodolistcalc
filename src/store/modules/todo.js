// 子模块todo
const todo = {
  namespaced: true, // 具有命名空间的state，后续都需要通过空间名称去访问
  state: {
    todo: [{
        id: '001',
        name: "看电影",
        completed: false
      },
      {
        id: '002',
        name: "睡觉",
        completed: false
      },
      {
        id: '003',
        name: "写代码",
        completed: true
      },
      {
        id: '004',
        name: "复习资料",
        completed: false
      }
    ],
    count: 2
  },
  mutations: {
    addTodo(state, item) {
      state.todo.push(item)
    },
    // 通过id找到任务并删除
    delTodo(state, id) {
      // 把不是当前的id给过滤掉
      state.todo = state.todo.filter(item => item.id !== id)
    },
    // 修改任务
    updTodo(state, updateTodo) {
      // console.log('vuex修改：', updateTodo.completed)

      // 找到当前对象并修改
      let index = state.todo.findIndex(item => item.id === updateTodo.id)
      // 后者覆盖前者
      Object.assign(state.todo[index], updateTodo)
    },
  },
  getters:{
    getCompleteNum(state){
      let result = {done:0,notDone:0}
      state.todo.forEach(item=>{
        if(item.completed) {
          result.done++
        }else{
          result.notDone++
        }
      })
      return result;
    }
  }
}

export default todo
