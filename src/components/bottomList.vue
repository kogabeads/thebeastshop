<template>
  <ul class="bottom_list">
    <li v-for="bottomlist in bottomlists">
      <router-link :to="bottomlist.path">{{bottomlist.txt}}</router-link>
    </li>
  </ul>
</template>

<script>
export default {

  data () {
    return {
      
    }
  },
  computed:{
    bottomlists(){
      return this.$store.state.bottomlist
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .bottom_list {
    border: 1px solid #686868;
    line-height: .36rem;
    li {
      padding: .02rem 0;
      border-bottom: 1px solid #686868;
      a {
        text-decoration: none;
        letter-spacing: .15rem;
        color: #413342;
      }
    }
  }
</style>
