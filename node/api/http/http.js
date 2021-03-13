const http = require('http')
const fs = require('fs')
const server = http.createServer((req, res) => {
    let { url, method, headers } = req
    if (url === '/' && method === 'GET') {
        fs.readFile('./index.html', (err, data) => {
            if (err) {
                // 一起设置 返回有中文 设置编码格式
                res.writeHead(500, {
                    'Content-Type': 'text/plain;charset=utf-8'
                })
                res.end('500,系统繁忙')
                return
            }
            // 分开设置
            res.statusCode = 200
            res.setHeader('Content-Type', 'text/html')
            res.end(data)
        })
    } else if (method === 'GET' && headers.accept) {
        // 处理静态资源
        // 图片
        // 忽略它 或者配置此图片
        if (url === '/favicon.ico') {
            res.end('/favicon.ico')
        } else if (headers.accept.indexOf('mage/*,') >= 0) {
            fs.createReadStream('.' + url).pipe(res)
        }
    } else {
        res.writeHead(500, {
            'Content-Type': 'text/plain;charset=utf-8'
        })
        console.log('这里可以处理接口');
        res.end('没有找到页面')
    }
})

server.listen(3000, () => {
    console.log(`server is running at port 3000`)
})