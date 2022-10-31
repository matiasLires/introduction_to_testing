const request = require('supertest');

const createApp = require('../src/app');

const { generateManyBooks } = require('../src/fakes/book.fake');

describe('Test for books', () => {
	let app = null;
	let server = null;
	let mockSpyGetAll = null;
	beforeAll(() => {
		app = createApp();
		server = app.listen(3001);

		mockSpyGetAll = jest.fn();

		jest.mock('../src/lib/mongo.lib', () =>
			jest
				.fn()
				.mockImplementation(() => ({ getAll: mockSpyGetAll, create: () => {} }))
		);
	});

	afterAll(async () => {
		await server.close();
	});

	describe('test for [GET] /api/v1/books', () => {
		test('should return a list books', () => {
			// Arrange
			const fakeBooks = generateManyBooks(3);
			mockSpyGetAll.mockResolvedValue(fakeBooks);
			// Act
			return request(app)
				.get('/api/v1/books')
				.expect(200)
				.then(({ body }) => {
					console.log(body);
					// Assert
					expect(body.length).toEqual(2);
				});
		});
	});
});
