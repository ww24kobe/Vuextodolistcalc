<template>
  <div class="todo-container">
    <h2>My to do list</h2>
    <div class="header">
      <input type="text"  @keyup.enter="add" v-model="name" class="form-control" placeholder="请输入你要做的事情">
      <button type="button" class="btn btn-primary" @click="add">确认</button>
    </div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">序号</th>
          <th scope="col">名称</th>
          <th scope="col">是否完成</th>
          <th scope="col">编辑</th>
          <th scope="col">删除</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in todo" :key="item.id">
          <td>
            <input class="form-check-input" type="checkbox" @click="completed(item)" v-model="item.completed">
          </td>
          <th scope="row">{{index + 1}}</th>
          <td :class="{'finish':item.completed}">{{ item.name }}</td>
          <td>{{ item.completed ? "完成" : "未完成" }}</td>
          <td>
            <button type="button" class="btn btn-info" @click="edit(item.id)">编辑</button>
          </td>
          <td>
             <button type="button" class="btn btn-danger" @click="del(item.id)">delete</button>
          </td>
        </tr>

      </tbody>
    </table>
    <div> 已完成：{{getCompleteNum.done }}   ,  未完成：{{getCompleteNum.notDone }} </div>
  </div>
</template>

<script>
import {mapState,mapMutations,mapGetters} from "vuex"
import { nanoid } from 'nanoid'
export default {
  data(){
    return {
      name:"",
      updateTodo:null // 记录当前正在编辑的任务 {}
    }
  },
  computed:{
    // 获取命名空间子模块todo中名为count和todo状态
    ...mapState('todo',['count','todo']),
    ...mapGetters('todo',['getCompleteNum'])
  },
  methods:{
    ...mapMutations('todo',['addTodo','delTodo','updTodo']),
    // 添加任务
    add(){
      if(this.updateTodo){
        // 编辑
        this.updateTodo.name = this.name
        // 更新Vuex
        this.updTodo(this.updateTodo)
      }else{
         console.log('添加')
        // 添加
         let item = {id:nanoid(),name:this.name,completed:false}
        // 往vuex中添加任务
        // this.$store.commit('todo/addTodo',item)
        this.addTodo(item)

      }
      this.updateTodo = null;
      this.name = ''

    },
    // 删除任务
    del(id){
       if (!confirm('确认删除吗')) {
        return;
      }
      //  this.$store.commit('todo/delTodo',id)
      this.delTodo(id)
    },
    // 编辑任务的名称
    edit(id){
      let updateTodo = this.todo.find(item => item.id === id)
      this.updateTodo = updateTodo
      let {name} = updateTodo;
      this.name = name
    },
    // 完成方法
    completed(item){
      // console.log(item)
      item.completed = !item.completed;
      this.updTodo(item)
    }
  }
};
</script>

<style lang="scss" scoped>
.todo-container {
  width: 800px;
  margin:  auto;
  .finish {
    text-decoration: line-through;
    color:red;
  }
  .header {
    display: flex;
    button {
      width: 100px;
    }
  }
}
</style>
