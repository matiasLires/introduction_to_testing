const { generateManyBooks } = require('../fakes/book.fake');
const BooksService = require('./books.service');

const mockSpyGetAll = jest.fn();

jest.mock('../lib/mongo.lib', () =>
	jest.fn().mockImplementation(() => {
		return { getAll: mockSpyGetAll, create: () => {} };
	})
);

describe('Test for BooksService', () => {
	let service;
	beforeEach(() => {
		service = new BooksService();
		jest.clearAllMocks();
	});

	describe('Test for getBooks', () => {
		test('should return a list book', async () => {
			// Arrange
			const fakeBooks = generateManyBooks(20);
			mockSpyGetAll.mockResolvedValue(fakeBooks);

			// Act
			const books = await service.getBooks({});
			console.log(books);
			// Assert
			expect(books.length).toEqual(fakeBooks.length);
			expect(mockSpyGetAll).toHaveBeenCalled();
			expect(mockSpyGetAll).toHaveBeenCalledTimes(1);
			expect(mockSpyGetAll).toHaveBeenCalledWith('books', {});
		});

		test('should return a name', async () => {
			// Arrange
			const fakeBooks = generateManyBooks(4);
			mockSpyGetAll.mockResolvedValue(fakeBooks);
			// Act
			const books = await service.getBooks({});
			console.log(books);
			// Assert
			expect(books[0].name).toEqual(fakeBooks[0].name);
		});
	});
});
