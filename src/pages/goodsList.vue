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
    <goods/>

    <!-- 客服电话 -->
    <div class="server_phone">
      客服电话：
      <a>400 - 9200 - 108</a>
    </div>

    <!-- 页面底部 -->
    <div class="footer">
      <router-link to="/vip">实体店铺</router-link>
      <router-link to="/vip">常见问题</router-link>
      <router-link to="/vip">关于我们</router-link>
    </div>
  </div>
</template>

<script>

import pubHeader from '@/components/pubHeader.vue'
import goods from '@/components/goods.vue'

export default {
  components:{
    pubHeader,goods
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
  .server_phone {
    border-top: 1px solid #454545;
    padding: .06rem 0;
    margin: 0 .1rem;
    text-align: center;
    font-size: .12rem;
    color: #717071;
    a{
      text-decoration: underline;
    }
  }
  .footer {
    padding: .16rem .1rem;
    background: #EAE9E9;
    display: flex;
    a{
      flex:1;
      font-size: 14px;
      color: #505050;
    }
  }
</style>
