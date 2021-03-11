### node基础篇

#### 运行调试

##### hello index.js

```
console.log('hello node.js');
```

##### bash运行

```
node hello
or 
node hello/index.js
or 
node hello/index
```

##### nodemon 自动启动

```
nodemon 文件
```

##### 单元测试 jest

```
npm i jest -g
```

- 在同级目录中新增 ______test______文件夹
- 再创建 index.spec.js

- 文件命名保持一致

```
test('hello-index.js', () => {
	let res = require('./../index');
	// 断言
	expect(res).toBe('hello node.js')
});

```

运行测试方法，可以查看效果

```
jest hello
or
jest hello --watch 实时监视 修改代码之后可以立即测试出效果
```

注意点

- jest hello 运行失败时  先初始化项目 npm init

  

##### 测试代码生成工具

###### 生成测试文件名

```
test('测试代码工具生成文件名', () => {
    let test = new (require('./../index'))()
    let res = test.getFileName('/mytest/index.js')
    expect(res).toBe('/mytest/__test__/index.spec.js')
})
```

我们可以先写好测试代码，测试驱动，然后实时修改我们的代码

###### 生成测试代码