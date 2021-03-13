const fs = require('fs')
const { promisify } = require('util')
// 同步读取
{
    let res = fs.readFileSync('./../config.js')
    console.log('同步读取的文件', res.toString());
}

// 异步读取
{
    fs.readFile('./../config.js', (err, data) => {
        if (err) {
            throw err
        }
        console.log('异步读取的文件', data.toString());
    })
}
// util.promisify() 方法，方便我们快捷的把原来的异步回调方法改成返回 Promise 实例的方法
{
    let read = promisify(fs.readFile)
    read('./../config.js').then((data) => {
        console.log('promisify读取的文', data.toString());
    }).catch((err) => {
        throw err
    })
}
// async await
{
    (async () => {
        let read = promisify(fs.readFile)
        let data = await read('./../config.js')
        console.log('async', data.toString());
    })()
}