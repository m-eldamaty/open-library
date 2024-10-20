import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BOOKS } from "../mock-data/mock-books";
import { Book } from "../mock-data/book.model";

@Component({
	selector: "app-book-details",
	templateUrl: "./book-details.component.html",
	styleUrls: ["./book-details.component.scss"],
})
export class BookDetailsComponent {
	bookDetails!: Book;
	loading: boolean = true;

	constructor(private route: ActivatedRoute) {}

	ngOnInit(): void {
		this.route.params.subscribe((params) => {
			const bookId = +params["id"];
			this.fetchBookDetails(bookId);
		});
	}

	fetchBookDetails(bookId: number): void {
		this.bookDetails = BOOKS.find((book) => book.id === bookId) || ({} as Book);
		this.loading = false;
	}

	getBookCoverUrl(book: Book): string {
		return book.cover_id
			? `assets/images/${book.cover_id}.jpg`
			: "assets/images/default-cover.png";
	}
}
