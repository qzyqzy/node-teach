const http = require('http')
const querystring = require('querystring')

const server = http.createServer((req, res) => {
    let { method, url } = req
    // 获取请求的路径
    let urlData = url.split('?')
    let path = urlData[0]
    let query = querystring.parse(urlData[1])

    let resData = { method, url, path, query }
    // 设置返回的格式
    res.setHeader('Content-type', 'application/json')

    // 判断get、post请求
    if (method === 'POST') {
        let postData = ''
        req.on('data', chunk => {
            postData += chunk
        })
        req.on('end', () => {
            resData.postData = postData
            res.end(JSON.stringify(resData))
        })
    } else if (method === 'GET') {
        res.end(JSON.stringify(resData))
    }
})

server.listen(3000, () => {
    console.log(`server is running at port 3000`)
})