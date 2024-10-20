import { Book } from "./book.model";

export const BOOKS: Book[] = [
	{
		id: 1,
		title: "The Great Gatsby",
		authors: [{ id: 1, name: "F. Scott Fitzgerald" }],
		first_publish_year: 1925,
		cover_id: 1111,
		edition_count: 5,
		subjects: ["Fiction", "Classic", "Finance"],
		noOfPages: 225,
	},
	{
		id: 2,
		title: "Brave New World",
		authors: [{ id: 2, name: "George Orwell" }],
		first_publish_year: 1949,
		cover_id: 2222,
		edition_count: 7,
		subjects: ["Dystopian", "Political Fiction", "Finance"],
		noOfPages: 799,
	},
	{
		id: 3,
		title: "To Kill a Mockingbird",
		authors: [{ id: 3, name: "Harper Lee" }],
		first_publish_year: 1960,
		cover_id: 54321,
		edition_count: 8,
		subjects: ["Fiction", "Historical"],
		noOfPages: 6125,
	},
	{
		id: 4,
		title: "Pride and Prejudice",
		authors: [{ id: 4, name: "Jane Austen" }],
		first_publish_year: 1813,
		cover_id: 4444,
		edition_count: 12,
		subjects: ["Romance", "Classic", "Finance"],
		noOfPages: 900,
	},
	{
		id: 5,
		title: "Moby Dick",
		authors: [{ id: 5, name: "Herman Melville" }],
		first_publish_year: 1851,
		cover_id: 5555,
		edition_count: 9,
		subjects: ["Adventure", "Classic", "Finance"],
		noOfPages: 450,
	},
	{
		id: 6,
		title: "The Catcher in the Rye",
		authors: [{ id: 3, name: "Harper Lee" }],
		first_publish_year: 1951,
		cover_id: 6666,
		edition_count: 10,
		subjects: ["Fiction", "Classic", "Finance"],
		noOfPages: 799,
	},
	{
		id: 7,
		title: "Brave New World",
		authors: [{ id: 7, name: "Aldous Huxley" }],
		first_publish_year: 1932,
		cover_id: null,
		edition_count: 6,
		subjects: ["Dystopian", "Science Fiction", "Finance"],
		noOfPages: 2300,
	},
	{
		id: 8,
		title: "Fahrenheit 451",
		authors: [{ id: 8, name: "Ray Bradbury" }],
		first_publish_year: 1953,
		cover_id: null,
		edition_count: 5,
		subjects: ["Dystopian", "Science Fiction", "Finance"],
		noOfPages: 655,
	},
	{
		id: 9,
		title: "The Hobbit",
		authors: [{ id: 9, name: "J.R.R. Tolkien" }],
		first_publish_year: 1937,
		cover_id: 9999,
		edition_count: 15,
		subjects: ["Fantasy", "Adventure", "Finance"],
		noOfPages: 1225,
	},
	{
		id: 10,
		title: "The Alchemist",
		authors: [{ id: 10, name: "Paulo Coelho" }],
		first_publish_year: 1988,
		cover_id: 9999,
		edition_count: 20,
		subjects: ["Adventure", "Philosophy", "Finance"],
		noOfPages: 941,
	},
	{
		id: 11,
		title: "War and Peace",
		authors: [{ id: 11, name: "Leo Tolstoy" }],
		first_publish_year: 1869,
		cover_id: 55555,
		edition_count: 8,
		subjects: ["Historical Fiction", "Classic", "Finance"],
		noOfPages: 1160,
	},
	{
		id: 12,
		title: "The Picture of Dorian Gray",
		authors: [{ id: 12, name: "Oscar Wilde" }],
		first_publish_year: 1890,
		cover_id: 66666,
		edition_count: 9,
		subjects: ["Fiction", "Classic", "Finance"],
		noOfPages: 566,
	},
];
