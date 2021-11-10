<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      count: {{$store.state.count}} <br />
      <!-- 总price:  {{$store.state.count * $store.state.price}} -->
      总price:  {{$store.getters.totalPrice}}
    </div>

    <button @click="clickHandle1">count++</button>
    <button @click="clickHandle2">count--</button>
    <button @click="clickHandle3">count++3</button>
    <button @click="clickHandle4">async异步 count</button>
  </div>
</template>
<script>
export default {
  methods:{
    clickHandle1(){
      // Vuex不建议直接这样改，通过mutation来修改数据
      // this.$store.state.count++;
      this.$store.commit('incCount',{step:1})
    },
    clickHandle2(){
      // this.$store.state.count--;
      this.$store.commit('decCount',{step:1})
    },
     clickHandle3(){
      // this.$store.state.count--;
      this.$store.commit('incCount',{step:3})
    },
    clickHandle4(){
      this.$store.dispatch('changePrice')
    }
  }
}
</script>
