// get 请求与 koa-router的应用
const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()

// 配置路由
// router.get('/', async (ctx) => {
//     ctx.body = 'hello 首页'
// })
// router.get('/mine', async (ctx) => {
//     ctx.body = 'hello 我的'
// })

// 两者是相同的
router.get('/', async (ctx) => {
    ctx.body = 'hello 首页'
}).get('/mine', async (ctx) => {
    ctx.body = 'hello 我的'
}).get('/news', async (ctx) => {
    // 获取 get 的参数
    // http://localhost:3000/news?name=qzy&age=18
    let { url, query, querystring } = ctx
    // 对象 ctx.request 也可获取到此参数
    ctx.body = {
        url,
        query,
        querystring
    }
}).get('/list/:id', async (ctx) => {
    // 动态路由 http://localhost:3000/list/577
    console.log(ctx.params); // { id: '577' }
    ctx.body = `hello 动态路由参数 ${JSON.stringify(ctx.params)}`
}).get('/more/:level/:id', async (ctx) => {
    // http://localhost:3000/more/1/123
    ctx.body = `hello 动态路由多个参数 ${JSON.stringify(ctx.params)}`
})

app
    .use(router.routes()) // 启动路由
    .use(router.allowedMethods()) // 当所有路由中间件最后调用，此时根据 ctx.status 设置 response 响应头 不是必须的 推荐使用

app.listen(3000)

console.log(`server is running at port 30000`);