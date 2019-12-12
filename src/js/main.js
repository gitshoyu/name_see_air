import "../css/main.css"
// import Vue from "../../node_modules/vue/dist/vue.js"
import Vue from "vue"
import VueRouter from "vue-router"
import app from "./app.vue"
import bar from "./bar.vue"

Vue.use(VueRouter)
var foo = {
    template: '<div>这是组件1foo</div>'

}
console.log(bar)

var routers = new VueRouter({
    routes: [
        {
            path: "/foo", component: bar
        }, {
            path: "/bar", component: bar
        }
    ]

})
 //再试一下项目~~~
 //这个没用吗

var vm = new Vue({
    el: '#app',
    data:{
        value:"yaoyao"
    },
    render: c => c(app),
    router: routers
})