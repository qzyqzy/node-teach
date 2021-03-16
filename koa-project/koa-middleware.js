// koa 中间件
const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()

// 应用级中间件
app.use((ctx, next) => {
    ctx.body = '中间件'
    console.log('中间件-进入访问时间' + new Date());
    // 不调动 next 会被拦截于此
    next() // 继续向下匹配 不是继续执行下面的代码
    // 洋葱模型 进入-离开 next() 前后
    console.log('中间件-结束访问时间' + new Date());
})
// 错误处理
// 调试错误处理时 注释掉 应用级中间件 ctx.body = ''
app.use((ctx, next) => {
    next()
    if (ctx.status == 404) {
        ctx.status = 404
        ctx.body = '404页面'
    }
})


router.get('/', async (ctx) => {
    ctx.body = 'hello 首页'
    console.log('进入首页');
}).get('/mine', async (ctx, next) => {
    // 路由级中间件
    console.log('我的 路由级中间件');
    // next 一定要执行
    next()
}).get('/mine', async (ctx) => {
    ctx.body = 'hello 我的'
})

app
    .use(router.routes()) // 启动路由
    .use(router.allowedMethods()) // 当所有路由中间件最后调用，此时根据 ctx.status 设置 response 响应头 不是必须的 推荐使用

app.listen(3000)

console.log(`server is running at port 30000`);