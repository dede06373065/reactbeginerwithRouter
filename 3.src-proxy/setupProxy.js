//CJS
const proxy=require('http-proxy-middleware')

module.exports=function(app){
    app.use(
        proxy('/api1'),{//遇到api1前缀，请求触发代理配置
            target:'http://localhost:5000',//请求转发给谁
            changeOrigin:true,//控制服务器收到的请求头中host字段的值
            pathRewrite:{'^/api1':''}//重写请求路径将api1替换为空字符串
        },//有api1证明要走代理.
        proxy('/api2'),{
            target:'http://localhost:5001',
            changeOrigin:true,
            pathRewrite:{'^/api2':''}
        }
    )
}