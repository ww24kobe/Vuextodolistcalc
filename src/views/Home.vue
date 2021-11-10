<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>count:{{count}}</h1>
    总price:  {{$store.getters.totalPrice}}

    <div>
      商品数量count: {{ $store.state.goods.count }} <br>
      商品总价格totalPrice: {{ $store.getters['goods/totalPrice'] }} <br>

    </div>
    <button @click="incGoodsCount">incGoodsCount</button>
    <button @click="decGoodsCount">decGoodsCount</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data(){
    return {
      count: this.$store.state.count
    }
  },
  methods:{
    incGoodsCount(){
      this.$store.commit('goods/incCount',{step:1})
    },
    decGoodsCount(){
       this.$store.commit('goods/decCount',{step:1})
    }
  }
}
</script>
