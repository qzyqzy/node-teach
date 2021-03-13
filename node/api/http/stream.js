const fs = require('fs')
// 读取
let rs = fs.createReadStream('./img/hello.jpg')
// 写入
let ws = fs.createWriteStream('./img/hello-stream.jpg')
// 导入
rs.pipe(ws)