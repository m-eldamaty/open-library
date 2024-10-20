// src/app/features/books/mock-data/book.model.ts

export interface Author {
	name: string;
	birthYear: number;
	deathYear?: number;
  }
  
  export interface Rating {
	average_rating: number;
	total_ratings: number;
  }
  
  export interface Book {
	id: number;
	title: string;
	authors: Author[];
	first_publish_year: number;
	cover_id: number;
	edition_count: number;
	subjects: string[];
	ratings: Rating;
  }
  