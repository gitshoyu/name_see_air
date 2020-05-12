import "../css/main.css"
// import Vue from "../../node_modules/vue/dist/vue.js"
import Vue from "vue"
import VueRouter from "vue-router"
import app from "../.vue/app.vue"
import bar from "../.vue/bar.vue"
import foo from "../.vue/foo.vue"
import $ from "jquery"

const os = require('os')
var men = os.freemem() / os.totalmem() * 100
console.log(`内存占用率为${men}%`)
Vue.use(VueRouter)

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
console.log("<p>hhheee </p>")