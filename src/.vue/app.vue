<template>
    <div>
        <h1>这是vue 组件内部{{value}}</h1>

        <router-link to="/foo">foo</router-link>
        <router-link to="/bar">bar</router-link>
        <div>{{value2}}</div>
        <router-view></router-view>
    </div>

</template>
<script>
import common from "./vmtrans.vue"

  export default{

    data(){
      return {
        value:'1'
        ,value2:'2'
      }
    },
    watch:{
      '$route'(to,from){
        console.log(to,from)
      }
    },
    mounted() {
        common.$on("hahahaha", (value) => {

            console.log("接收到参数：" + value)
            this.value2 = value
        })
    },
  }


</script>
  <style>


</style>

