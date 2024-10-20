import { Author } from "./author.model";

export const AUTHORS: Author[] = [
	{
		id: 1,
		name: "F. Scott Fitzgerald",
		birthDate: "1896-09-24",
		photoUrl: "assets/images/author1.jpg",
		workCount: 5,
		topSubjects: ["Fiction", "Classic", "Literature", "Drama", "Poetry"],
	},
	{
		id: 2,
		name: "George Orwell",
		birthDate: "1903-06-25",
		photoUrl: "assets/images/author2.jpg",
		workCount: 7,
		topSubjects: [
			"Dystopian",
			"Political Fiction",
			"Science Fiction",
			"Satire",
			"Non-fiction",
		],
	},
	{
		id: 3,
		name: "Harper Lee",
		birthDate: "1926-04-28",
		photoUrl: "assets/images/author3.jpg",
		workCount: 2,
		topSubjects: [
			"Fiction",
			"Southern Gothic",
			"Coming-of-age",
			"Drama",
			"Literature",
		],
	},
	{
		id: 4,
		name: "Jane Austen",
		birthDate: "1775-12-16",
		photoUrl: "assets/images/author4.jpg",
		workCount: 6,
		topSubjects: ["Romance", "Classic", "Literature", "Fiction", "Drama"],
	},
	{
		id: 5,
		name: "Herman Melville",
		birthDate: "1819-08-01",
		photoUrl: "assets/images/author5.jpg",
		workCount: 9,
		topSubjects: ["Adventure", "Classic", "Fiction", "Drama", "Literature"],
	},
];
