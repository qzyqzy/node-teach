// cookie
const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()


router.get('/', async (ctx) => {
    // 用的时候这样设置就够了 其他的再做延伸
    ctx.cookies.set('cookieKey', 'qzyqzy', {
        maxAge: 5 * 60 * 1000 // 单位毫秒 过期时间5分钟
    })
    // cookie 中存储中文时 需要特殊处理一下
    let value = Buffer.from('中文').toString('base64');
    ctx.cookies.set('cookieKey1', value, {
        maxAge: 5 * 60 * 1000
    })
    ctx.body = '首页-设置cookie'
}).get('/mine', async (ctx) => {
    console.log('cookie is ', ctx.cookies.get('cookieKey'));
    // 获取时也需要转化一下
    console.log('cookieKey1 is ', Buffer.from(ctx.cookies.get('cookieKey1'), 'base64').toString());
    ctx.body = '我的-获取cookie'
})

app
    .use(router.routes()) // 启动路由
    .use(router.allowedMethods()) // 当所有路由中间件最后调用，此时根据 ctx.status 设置 response 响应头 不是必须的 推荐使用

app.listen(3000)

console.log(`server is running at port 30000`);