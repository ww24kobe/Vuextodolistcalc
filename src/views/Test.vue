<template>
  <div>
    <h2>Test 页面</h2>
    <div>count: {{ count }}</div>
    <div>price: {{ price }}</div>
    <div>总价格：{{ totalPrice }}</div>
    <div>
      <button @click="incCount({step:1})">+</button>
      <button @click="decCount({step:1})">-</button>
      <button @click="changePrice">changePrice</button>
    </div>
  </div>
</template>

<script>
import {mapGetters,mapActions,mapState,mapMutations} from 'vuex'

// console.log(mapState(['count','price']))
  export default {
    computed:{
      // count(){
      //    return this.$store.state.count
      // },
      // price(){
      //   return this.$store.state.price
      // }
      ...mapState(['count','price']),
      ...mapGetters(['totalPrice'])
    },
    methods:{
      ...mapMutations(['incCount','decCount']),
      ...mapActions(['changePrice'])
    }
  }
</script>

<style lang="scss" scoped>

</style>
