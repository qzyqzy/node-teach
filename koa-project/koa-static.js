// 静态资源测试
const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()
const serve = require('koa-static')
const fs = require('fs')
const { promisify } = require('util')


router.get('/', async (ctx) => {
    let data = await promisify(fs.readFile)('./koa-static.html')
    ctx.type = 'text/html;charset=utf-8'
    ctx.body = data
})

app
    .use(serve(__dirname + '/static')) // 配置多个
    .use(serve(__dirname + '/public'))
    .use(router.routes())
    .use(router.allowedMethods())

app.listen(3000)
console.log(`server is running at port 30000`);
