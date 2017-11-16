<template>
  <div>
    <div class="header">
      <div class="menu">
        <i class="iconfont icon-caidan"></i>
      </div>
      <div class="search">
        <i class="iconfont icon-fangdajing"></i>
      </div>
      <div class="buycar">
        <i class="iconfont icon-iconfont08"></i>
      </div>
      <div class="logo">
        <router-link to="/"></router-link>
      </div>
    </div>

    <div class="left_card">
      
    </div>
  </div>
</template>

<script>
export default {

  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .header{
    position: fixed;
    z-index:20;
    top: 0px;
    left: 0px;
    width: 100%;
    height: .45rem;
    background-color: #413342;
    text-align: center;
    line-height: .45rem;
    color: #fff;
    .menu{
      width: .47rem;
      height: 100%;
      position:absolute;
      left: 0;
      top: 0;
    }
    .search{
      width: .29rem;
      height: 100%;
      position:absolute;
      right: .33rem;
      top: 0;
    }
    .buycar{
      width: .33rem;
      height: 100%;
      position:absolute;
      right: 0;
      top: 0;
    }
    .logo{
      width: 100%;
      height: 100%;
      a{
        display: block;
        width: 1.23rem;
        height: .18rem;
        background:url(/src/assets/wap-logo.png);
        background-size:100%;
        position:absolute;
        left: 50%;
        top: 50%;
        margin-left: -.61rem;
        margin-top: -.09rem;
      }
    }
  }
</style>
