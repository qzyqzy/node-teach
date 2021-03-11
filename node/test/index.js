const path = require('path')
module.exports = class test {
    // 生成测试文件名
    getFileName(fileName) {
        // '/mytest/index.js'
        const root = path.dirname(fileName) //  /mytest 
        const baseName = path.basename(fileName) // index.js 
        const extName = path.extname(fileName) // .js
        let testName = baseName.replace(extName, `.spec${extName}`)
        return path.format({
            root: `${root}/__test__/`,
            base: testName
        })
    }
    // 生成测试代码
    getFileSource(method, fileName) {
        return `
test('测试:${method}', () => {
    let ${method} = new (require('./../${fileName}'))()
    let res = test.getFileName('')
    // expect(res).toBe('')
})
    `
    }
}