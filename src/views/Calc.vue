<template>
  <div class="calc-container">
    <div class="header">

      <div class="result">{{ result }}</div>
      <div class="process">{{ n1 }} {{ operate }} {{n2}}</div>
    </div>
    <div class="main">
      <div class="item" @click="clear">C</div>
      <div class="item"><=</div>
      <div class="item" @click="operateSign('%')" >%</div>
      <div class="item" @click="operateSign('+')">+</div>

      <div class="item" @click="getNumber(7)">7</div>
      <div class="item" @click="getNumber(8)" >8</div>
      <div class="item" @click="getNumber(9)" >9</div>
      <div class="item"  @click="operateSign('-')">-</div>

      <div class="item" @click="getNumber(4)">4</div>
      <div class="item" @click="getNumber(5)">5</div>
      <div class="item" @click="getNumber(6)">6</div>
      <div class="item" @click="operateSign('*')">*</div>

      <div class="item" @click="getNumber(1)">1</div>
      <div class="item" @click="getNumber(2)">2</div>
      <div class="item" @click="getNumber(3)">3</div>
      <div class="item" @click="operateSign('/')">/</div>

      <div class="item">()</div>
      <div class="item">0</div>
      <div class="item">.</div>
      <div class="item"  @click="getResult">=</div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        n1:'',
        n2:'',
        operate:'',
        result:''
      }
    },
    methods:{
      getNumber(number){
        if(this.n1){
          this.n2 = number
        }else {
          this.n1 = number
        }

      },
      operateSign(operate){
        this.operate = operate
      },
      getResult(){
        let n1 = parseInt(this.n1);
        let n2 = parseInt(this.n2);
        this.result = this.operateMap(this.operate,n1,n2)

      },
      operateMap(operate,n1,n2){
        let operateMap = {
          "+": n1 + n2,
          "-": n1 - n2,
          "*": n1 * n2,
          "/": n1 / n2,
          "%": n1 % n2
        }
        return operateMap[operate]
      },
      clear(){
        this.n1 = this.n2 = this.result = this.operate = ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  .calc-container {
    width: 260px;
    border: 1px solid #ccc;
    margin: 50px auto;
    .header {
      position:relative;
      justify-content: space-between;
      height:170px;
      background: #485048;
      padding: 10px;

      .process {
        position: absolute;
        right:10px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 20px;
        color:#7d817d;
      }

      .result {
        position: absolute;
        right:10px;
        bottom:10px;
        font-size: 30px;
        color:#fff;
      }

    }
    .main {

      display:flex;
      background-color: #202018;
      flex-wrap: wrap;
      justify-content: space-around;
      padding: 4px;
      color: #fff;
      font-size: 30px;

      .item {
        display: flex;
        justify-content: center;
        align-items: center;

        width:56px;
        height:56px;
        background: #485048;
        border-radius: 50%;
        margin-bottom: 4px;
      }
    }
  }
</style>
