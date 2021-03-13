// 创建一个10个字节以0填充的buffer
let buf = Buffer.alloc(10);
console.log('buf', buf, buf.toString());

// 填充 buffer
let buf1 = Buffer.from('啊')
console.log('buf1', buf1, buf1.toString());

// 写入 buffer
buf.write('写入buffer')
console.log('buf', buf, buf.toString());

// 合并 buffer
let buf2 = Buffer.concat([buf, buf1])
console.log('buf2', buf2, buf2.toString());