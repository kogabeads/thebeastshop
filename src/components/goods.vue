<template>
  <div class="goods">
    <div v-for="good in goods">

      <div class="J_Div"> 
        <div class="list_con_pic">
          <router-link to="">
            <img :src="good.src" alt="undefined"> 
          </router-link> 
        </div> 

        <div class="list_container">
          <p class="list_con_p recommend"> 
            <router-link class="list_con_name" to="">{{good.name}}</router-link>
          </p>

          <p class="list_con_h">{{good.logo}}</p>
          <p class="list_con_p">
            <router-link to="">{{good.txt}}</router-link>
          </p> 

          <div class="list_con_price">
            <p class="list_con_new">{{good.price}}</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>


export default {
  computed:{
    goods(){
      return this.$store.state.goods
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .goods {
    overflow: hidden;
    padding: 0 .1rem;
    p {
      text-align: left;
      line-height: .16rem;
      color: #4d4d4d;
      font-size: .13rem;
      line-height: 1.4;
    }
    .J_Div {
      position: relative;
      overflow: hidden;
      float: left;
      width: 50%;
      padding: .15rem .05rem 0 .05rem;
      box-sizing: border-box;
      .list_con_pic {
        width: 100%;
        position: relative;
        img {
          width: 100%;
        }
      }
      .list_container{
        .recommend {
          padding-top: .05rem;
          a.list_con_name {
            color: #9A9A9A;
          }
        }
        .list_con_p {
          overflow: hidden;
          max-height: .36rem;
          letter-spacing: -0.4px;
          word-spacing: -2px;
          white-space: nowrap;
          text-overflow: ellipsis;
          a {
            font-size: .13rem;
            color: #4D4D4D;
            text-decoration: none;
          }
        }
        .list_con_h {
          overflow: hidden;
          width: 100%;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .list_con_new {
          color: #004C46;
          font-size: .15rem;
        }
      }
    }
  }
</style>
