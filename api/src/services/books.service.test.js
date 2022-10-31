const BooksService = require('./books.service');

const fakeBooks = [
	{
		_id: 1,
		name: 'Harry Potter',
	},
];

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
			// spyGetAll.mockResolvedValue(fakeBooks);
			mockSpyGetAll.mockResolvedValue([
				{
					_id: 1,
					name: 'Harry Potter 2',
				},
			]);
			// Act
			const books = await service.getBooks({});
			console.log(books);
			// Assert
			expect(books.length).toEqual(1);
			expect(mockSpyGetAll).toHaveBeenCalled();
			expect(mockSpyGetAll).toHaveBeenCalledTimes(1);
			expect(mockSpyGetAll).toHaveBeenCalledWith('books', {});
		});

		test('should return a name', async () => {
			// Arrange
			// Act
			const books = await service.getBooks({});
			console.log(books);
			// Assert
			expect(books[0].name).toEqual('Harry Potter 2');
		});
	});
});
