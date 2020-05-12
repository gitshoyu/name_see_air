const path = require("path")

const htmlWebpackPlugin = require('html-webpack-plugin') //配置启动页的一个插件

const webpack = require('webpack')

const VueLoaderPlugin = require("vue-loader/lib/plugin")

const config = {
    entry: path.join(__dirname, "src/js/main.js"),
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js"
    },
    mode: "production" //模式: 生产模式(production)

    ,
    devServer: { //配置服务器启动项
        open: true, //启动就打开页面
        port: 3001, //端口号
        hot: true //热部署局部刷新(需要引入'html-webpack-plugin'插件)
            ,
        disableHostCheck: true
    },
    plugins: [ //配置插件
        new htmlWebpackPlugin({
            filname: "index.html",
            template: path.join(__dirname, "src/index.html")
        }),
        new webpack.HotModuleReplacementPlugin(), //需要new 一个热部署的插件,保证每次局部刷新
        new VueLoaderPlugin() // 根据错误提示使用.vue时需要这玩意
    ],
    module: { // 用来配置第三方loader模块      /\.css$/ 正则 : 处理以.css结尾的文件    执行顺序从又到左执行
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            { test: /.vue$/, use: 'vue-loader' },
            { test: /\.(png|svg|jpg|gif)$/, use: 'file-loader' }
        ]
    }
}
module.exports = config;