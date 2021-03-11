test('测试代码工具生成文件名', () => {
    let test = new (require('./../index'))()
    let res = test.getFileName('/mytest/index.js')
    expect(res).toBe('/mytest/__test__/index.spec.js')
})
test('测试代码工具生成文件内容', () => {
    let test = new (require('./../index'))()
    let res = test.getFileSource('fn', 'index.js')
    expect(res).toBe(`
test('测试:fn', () => {
    let fn = new (require('./../index.js'))()
    let res = test.getFileName('')
    // expect(res).toBe('')
})
    `)
})