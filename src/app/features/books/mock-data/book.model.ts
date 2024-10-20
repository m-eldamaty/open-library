import { Author } from "./author.model";

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
