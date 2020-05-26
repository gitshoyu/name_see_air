import "../css/main.css"
// import Vue from "../../node_modules/vue/dist/vue.js"
import Vue from "vue"
import VueRouter from "vue-router"
import app from "../.vue/app.vue"
import bar from "../.vue/bar.vue"
import foo from "../.vue/foo.vue"
import $ from "jquery"

//1. 
Vue.use(VueRouter)

//2 路由定义
let routes = [
    { path: "/foo", component: foo },
    { path: "/bar", component: bar }
]

var routers = new VueRouter({ routes })

//3 挂载
var vm = new Vue({

    render: c => c(app),

    router: routers

}).$mount('#app')