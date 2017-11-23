<template>
  <div>
  	<!-- 公共头部 -->
    <pub-header/>

    <!-- 专题列表 -->
    <subject-list/>

    <!-- 首页主体 -->
    <div class="lay_bottom">

    	<!-- 更多列表 -->
      <p class="btn_group clearfix">
          <button @click="handleCard" type="button" class="u-btn-dark" id="J_OpenMenuBtm">按分类选购</button>
          <a href="" class="u-btn-dark">寻找实体店</a>
          <a href="" class="u-btn-dark">猛男课堂</a>
      </p>

      <!-- 底部列表 -->
      <bottom-list/>
     
      <!-- 页面底部 -->
      <div class="u_gif">
          <p>
          	<img src="http://oss.thebeastshop.com/static/dist/images/gif.eb17a14d.png" alt="">
          </p>
      </div>
      <dl class="m_att">
          <dt>关 注 野 兽 派 ：</dt>
          <dd>
              <div class="bdsharebuttonbox">
              	<a class="bds_weixin" id="J_ToWeixin" title="分享到微信"></a>
              	<a class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a>
                <a target="_blank" class="m-gongshang">
                	<img src="http://oss.thebeastshop.com/assets/images/gongshang.jpg">
                </a>
              </div>
          </dd>
      </dl>
      <div class="copyright">
          <p>微信客服 ：beastshop 电话客服 ：400-9200-108</p>
          <p class="en">©THEBEAST</p>
      </div>
    </div>

  </div>
</template>

<script>
  //  引入子组件
  import pubHeader from '@/components/pubHeader.vue'
  import subjectList from '@/components/subjectList.vue'
  import bottomList from '@/components/bottomList.vue'

  export default {
    components:{
      pubHeader,subjectList,bottomList
    },
    methods:{
    	handleCard(){
    		this.$store.commit('cardChange');
    	}
    }
  }
</script>

<style scoped lang="scss">
  .lay_bottom {
    padding: 10px;
    .btn_group {
      padding: 10px 0;
      a,button {
        display: block;
        width: 100%;
        height: 36px;
        border: none;
        margin-bottom: 15px;
        line-height: 2.6;
        text-align: center;
        text-decoration: none;
        font-size: 14px;
        letter-spacing: 12px;
        color: #fff;
        background-color: #413342;
      }
    }
    .u_gif {
      padding: 35px;
      p {
        width: 34%;
        margin: 0 auto;
        img {
          width: 100%;
        }
      }
    }
    .m_att{
    	dt{
    		font-size:.16rem;
    		color:#000;
    	}
    	.bdsharebuttonbox {
		    overflow: hidden;
		    width: 143px;
		    height: 23px;
		    margin: 0 auto;
		    padding: 10px 0;
		    a{
		    	float: left;
		    }
		    .bds_weixin,.bds_tsina {
		    	display: inline-block;
		    	margin: 0 10px 0 0;
				  background: url(/src/assets/thebeast-icon.png) no-repeat 0 0;
				}
		    .bds_weixin {
			    width: 30px;
			    height: 18px;
			    background-position: 0 -143px;
			    background-size: 120px auto;
				}
				.bds_tsina {
			    width: 29px;
			    height: 18px;
			    background-position: 5px -160px;
			    background-size: 120px auto;
				}
				.m-gongshang img {
				  width: 64px;
				}
			}
    }
    .copyright {
			p {
		    line-height: 1.8;
		    font-size: 12px;
		    color: #333;
			}
			.en {
			  color: #686868;
			}
		}
  }
  
</style>
