<template>
  <div class="subject">
    <div class="sublist" v-for="sublist in sublists">
      <!-- {{ sublist.txt }} -->
      <div class="home_box">
        <div class="box_head">
          <p>
            <router-link to="/goodsList">
              <img :src='sublist.src' style="display: inline;">
            </router-link>
          </p>
        </div>

        <div class="box_info">
          <p class="txt">{{ sublist.txt }}
            <span class="price" style="display:block;">{{ sublist.price }}</span>
          </p>

          <router-link to="/goodsList">
            <p class="right">
                <a href="#" class="btn">{{ sublist.more }}</a>
            </p>
          </router-link>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

export default {

  data () {
    return {
      
    }
  },
  computed:{
    sublists () {
      return this.$store.state.sublists
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .subject{
    width: 100%;
    padding-top: .55rem;
    .home_box {
      position: relative;
      width: 96%;
      padding: 0 2%;
      margin-bottom: .1rem;
      .box_head {
        position: relative;
        p, input, button, a {
          font-size: 16px;
        }
        img {
          width: 100%;
        }
      }
      .box_info {
        position: relative;
        overflow: hidden;
        padding: 8px 10px;
        font-size: 12px;
        line-height: 24px;
        background-color: #eae5eb;
        text-align: left;
        p {
          font-size: 12px;
          line-height: 24px;
          color:#000;
          overflow: hidden;
          -ms-text-overflow: ellipsis;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .txt {
          -moz-box-sizing: border-box;
          -o-box-sizing: border-box;
          -ms-box-sizing: border-box;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          width: 100%;
          padding-right: 110px;
          font-size: 14px;
          .price {
            margin-right: 5px;
            font-size: 16px;
          }
        }
        .right {
          position: absolute;
          right: 10px;
          bottom: 9px;
          z-index: 8;
          a {
            padding: 4px 12px;
            line-height: 14px;
            border: 1px solid #333;
            font-size: 12px;
            text-decoration: none;
            color: #333;
            background: none;
            border-radius: 4px;
          }
        }
      }
    }
  }
</style>
