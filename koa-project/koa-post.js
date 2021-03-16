// post 请求处理
const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router()
const fs = require('fs')
const { promisify } = require('util')
const bodyParser = require('koa-bodyparser');

const getPostData = (ctx) => {
    return new Promise((resolve, reject) => {
        try {
            let data = ''
            ctx.req.on('data', (chunk) => {
                data += chunk
            })
            ctx.req.on('end', () => {
                resolve(data)
            })
        } catch (error) {
            reject(error)
        }
    })

}

router.get('/', async (ctx) => {
    let data = await promisify(fs.readFile)('./koa-post.html')
    ctx.type = 'text/html;charset=utf-8'
    ctx.body = data
})
// 中间件 处理 post 数据
app.use(bodyParser())

router.post('/post', async (ctx) => {
    // koa 中自己获取 post 数据
    let data = await getPostData(ctx)
    ctx.body = data
}).post('/post/middleware', async (ctx) => {
    // koa-bodyparser
    ctx.body = ctx.request.body;
})

app
    .use(router.routes()) // 启动路由
    .use(router.allowedMethods()) // 当所有路由中间件最后调用，此时根据 ctx.status 设置 response 响应头 不是必须的 推荐使用

app.listen(3000)

console.log(`server is running at port 30000`);