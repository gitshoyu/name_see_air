<template>
    <div>
        <h2>这是组件2 bar</h2>
        <div>{{value}}</div>
        <a href="javascript:;" @click="click1">点击改变外面的数字</a>
    </div>
</template>

<script>
import common from "./vmtrans.vue"

export default {
    data(){
        return {
            value:'哈哈哈',
            count:0
        }
    },
    mounted(){
        console.log(common)

    },
    methods:{
        click1(){
            this.count++
            common.$emit("hahahaha",this.count+this.value)
            console.log(this.count+this.value)
        }
    }
}
</script>

<style>
    
</style>