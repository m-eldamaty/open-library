import { Component } from '@angular/core';
import { Book } from '../mock-data/book.model';
import { BOOKS } from '../mock-data/mock-books';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
	books: Book[] = []; 

	ngOnInit(): void {
	  this.loadFinanceBooks();
	}
  
	loadFinanceBooks(): void {
	  this.books = BOOKS.filter(book => book.subjects.includes('Finance')).slice(0, 9);
	}
  
	getBookCoverUrl(book: Book): string {
	  return book.cover_id 
		? `assets/images/cover${book.cover_id}.jpg` 
		: 'assets/images/default-placeholder.jpg';
	}
}
