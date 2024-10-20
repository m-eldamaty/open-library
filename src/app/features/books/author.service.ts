import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Author } from "./mock-data/author.model";
import { AUTHORS } from "./mock-data/mock-authors";

@Injectable({
	providedIn: "root",
})
export class AuthorService {
	constructor() {}
	getAuthorDetails(authorId: number): Observable<Author | null> {
		const author = AUTHORS.find((a) => a.id === authorId);
		return of(author ? author : null);
	}
}
