export interface Author {
	name: string;
	birthYear: number;
	deathYear?: number;
}

export interface Book {
	id: number;
	title: string;
	authors: Author[];
	first_publish_year: number;
	cover_id: number | null;
	edition_count: number;
	subjects: string[];
	noOfPages: number;
}
