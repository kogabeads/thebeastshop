<template>
  <div>
    <!-- 公共头部 -->
    <pub-header/>

    <!-- 页面头部 -->
    <div class="header_con">
      <i class="iconfont icon-zuo" onclick="history.go(-1)"></i>
      <h1>双十一满减&nbsp;</h1>
    </div>

    <!-- 商品列表 -->
    <div class="goods">
      
    </div>
  </div>
</template>

<script>

import pubHeader from '@/components/pubHeader.vue'

export default {
  components:{
    pubHeader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .header_con{
    position:relative;
    padding-top: .45rem;
    margin: 0 2%;
    border-bottom: 1px solid #999;
    border-top: 1px solid #999;
    i {
      position: absolute;
      left: .1rem;      
      top: 65%; 
      color: #cbcbcb;
      width: .28rem;
      font-size: .18rem;
    }
    h1 {
      font-size: .18rem;
      line-height: 1.2;
      text-align: center;
      color: #595757;
      margin-left: .25rem;
      padding: .1rem 0;
      font-weight:normal;
    }
  }
</style>
