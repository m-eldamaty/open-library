import { Component } from "@angular/core";
import { Book } from "../mock-data/book.model";
import { BOOKS } from "../mock-data/mock-books";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
	books: Book[] = [];
	loading: boolean = true;

	ngOnInit(): void {
		this.loadFinanceBooks();
	}

	loadFinanceBooks(): void {
		setTimeout(() => {
			this.loading = false;
		}, 2000);
		this.books = BOOKS.filter((book) =>
			book.subjects.includes("Finance")
		).slice(0, 9);
	}
	getBookCoverUrl(book: Book): string {
		if (book.cover_id) {
			return `assets/images/${book.cover_id}.jpg`;
		} else {
			return "assets/images/default-cover.png";
		}
	}
}
