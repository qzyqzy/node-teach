test('hello-index.js', () => {
	let res = require('./../index');
	// 断言
	expect(res).toBe('hello node.js')
});
