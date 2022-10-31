const { sum, multiply, divide } = require('./02-math');

describe('Test for math', () => {
	describe('tests for sum', () => {
		test('adds 1 + 3 should be 4', () => {
			const res = sum(1, 3);
			expect(res).toBe(4);
		});
	});
	describe('tests for multiply', () => {
		test('multiply 1 * 2 should be 2', () => {
			const res = multiply(1, 2);
			expect(res).toBe(2);
		});
	});
	describe('tests for divide', () => {
		test('divide 6 / 2 should be 3', () => {
			const res = divide(6, 2);
			expect(res).toBe(3);
		});
	});
	describe('tests divide for zero', () => {
		test('should divide for zero', () => {
			const res = divide(6, 0);
			expect(res).toBeNull();
		});
	});
});
