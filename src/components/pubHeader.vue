<template>
  <div>
    <div class="header">
      <div v-if="isSearch">
        <div class="menu">
          <i @click="handleMoveCard" class="iconfont icon-caidan"></i>
        </div>
        <div class="search">
          <i @click="isSearch = !isSearch" class="iconfont icon-fangdajing"></i>
        </div>
        <div class="buycar">
          <i class="iconfont icon-iconfont08"></i>
        </div>
        <div class="logo">
          <router-link to="/"></router-link>
        </div>
      </div>
      
      <div v-else="isSearch">
        <input type="text" placeholder="搜索" />
        <i @click="isSearch = !isSearch" class="search iconfont icon-fangdajing"></i>
      </div>
    </div>

    <transition name="fade">
      <div class="left_card" :id="cardshow?'show':''" v-show="cardshow">
        <div class="card_login">
          <span class="fl">登录</span>
          <i @click="handleMoveCard" class="iconfont icon-cha fr"></i>
        </div>
        <div class="card_kinds">
          <router-link to="/">首页</router-link>
          <div v-for="(cardKind,index) in cardKinds">
            {{cardKind.name}}
            <i @click="handleAdd(index)" v-if="cardKind.add" class="fr iconfont icon-jia"></i>
            <router-link to="/goodsList" class="card_more" v-show="kindMore[index]" v-for="more in cardKind.more">{{more}}</router-link>
          </div>
        </div>
      </div>
    </transition>

  </div>
</template>

<script>
export default {

  data () {
    return {
      kindMore:[false,false,false,false,false,false,false,false,false],
      isSearch:true
    }
  },
  computed:{
    cardKinds(){
      return this.$store.state.cardKind
    },
    cardshow(){
      return this.$store.state.cardshow
    }
  },
  methods:{
    handleAdd(idx){
      this.kindMore.splice(idx,idx+1,!this.kindMore[idx]);
    },
    handleMoveCard(){
      console.log(this.cardshow);
      this.$store.commit('cardChange');
      console.log(this.cardshow);
    }
  }
}
</script>

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
    input {
      -moz-box-sizing: border-box;
      -o-box-sizing: border-box;
      -ms-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 100%;
      padding: .15rem .5rem .15rem .15rem;
      font-size: .14rem;
      line-height: .14rem;
      color: #686868;
      border: none;
      background: none;
      outline: none;
    }
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

  .fade-enter-active{
    animation: fadeIn .5s;
  }

  .fade-leave-active{
    animation: fadeOut .5s;
  }

  @keyframes fadeIn{
    0%{
      left:-2.19rem;
      opacity: 0;
    }
    100%{
      left:0;
      opacity: .9;
    }
  }

  @keyframes fadeOut{
    0%{
      left:0;
      opacity: .9;
    }
    100%{
      left:-2.19rem;
      opacity: 0;
    }
  }

  #show{
    left:0;
  }

  .left_card{
    width: 2.19rem;
    height: 100%;
    position:fixed;
    left:-2.56rem;
    top: 0;
    opacity:.9;
    background:#000;
    z-index:40;
    line-height: .38rem;
    padding: 0 .17rem 0 .2rem;
    color: #fff;
    a{
      color:#fff;
    }
    .card_login{
      height: .45rem;
      line-height: .45rem;
      span{
        text-decoration: underline;
      }
    }
    .card_kinds{
      height: 100%;
      text-align:left;
      overflow-y: auto; 
      .card_more{
        margin-left: .4rem;
        display: block;
      }
    }
  }
</style>
