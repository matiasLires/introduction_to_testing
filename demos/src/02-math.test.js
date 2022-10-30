const { sum, multiply, divide } = require('./02-math');

test('adds 1 + 3 to equal 4', () => {
	const res = sum(1, 3);
	expect(res).toBe(4);
});

test('multiply 1 * 2 to equal 2', () => {
	const res = multiply(1, 2);
	expect(res).toBe(2);
});

test('divide 6 / 2 to equal 3', () => {
	const res = divide(6, 2);
	expect(res).toBe(3);
});
