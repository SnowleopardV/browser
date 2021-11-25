<template>
  <div>
    <div class="container">
      <div id="overview1"></div>
      <div id="overview2"></div>
      <div id="overview3"></div>
      <div id="overview4"></div>
    </div>
    
    <div class="container">
      <div id="chrome"></div>
      <div id="edge"></div>
      <div id="firefox"></div>
      <div id="safari"></div>
    </div>

    <div class="simple-info">
      <div>
        <p>样本数量:</p>
        <!-- <p>用户ID数量:</p> -->
        <p>数据来源:</p>
      </div>
      <div class="text-left">
        <p>{{ total }}</p>
        <!-- <p>{{ total }}</p> -->
        <p>埋点数据报表</p>
      </div>
    </div>
  </div>
</template>

<script>
import { init } from '../api'

export default {
  name: 'browsers-analyse',
  data () {
    return {
      total: 8642
    }
  },
  mounted() {
    this.$nextTick(() => {
        init()
    })
  }
}
</script>

<style>
  .title {
    text-align: left;
    color: #ffffff;
  }
  .simple-info {
    margin-top: 20px;
    width: 200px;
    float: right;
    display: flex;
    font-size: 8px;
    line-height: 15px;
    text-align: right;
    color: #ffffff;
  }
  .simple-info > div {
    flex: 1
  }
  .simple-info p {
    height: 8px
  }
  .text-left {
    padding-left: 5px;
    text-align: left;
  }
  .container {
    margin-top: 45px;
    display: flex;
  }
  div[id^="overview"], #chrome, #firefox, #edge, #safari {
    flex: 1;
    width: 300px;
    height: 300px;
    /* border: 1px solid black */
  }
</style>