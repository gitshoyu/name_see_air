import "../css/main.css"
// import Vue from "../../node_modules/vue/dist/vue.js"
import Vue from "vue"
import VueRouter from "vue-router"
import app from "./app.vue"
import bar from "./bar.vue"
import foo from "./foo.vue"

Vue.use(VueRouter)


console.log(bar)

var routers = new VueRouter({
        routes: [{
            path: "/foo",
            component: foo
        }, {
            path: "/bar",
            component: bar
        }]

    })
    //再试一下项目~~~
    //这个没用吗

var vm = new Vue({
    el: '#app',
    data: {
        value: "yaoyao"
    },
    render: c => c(app),
    router: routers
})