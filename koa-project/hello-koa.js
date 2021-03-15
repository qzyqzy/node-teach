const Koa = require('koa')
const app = new Koa()

// 中间件
app.use(async (ctx) => {
    ctx.body = 'hello koa2'
})

app.listen(3000)

console.log(`server is running at port 30000`);