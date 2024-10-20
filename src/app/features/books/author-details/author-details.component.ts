import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AuthorService } from "../author.service";
import { Author } from "../mock-data/author.model";

@Component({
	selector: "app-author-details",
	templateUrl: "./author-details.component.html",
	styleUrls: ["./author-details.component.scss"],
})
export class AuthorDetailsComponent {
	authorId: number = 0;
	authorDetails: Author | null = null;

	constructor(
		private route: ActivatedRoute,
		private authorService: AuthorService
	) {}

	ngOnInit(): void {
		this.route.params.subscribe((params) => {
			this.authorId = +params["id"];
			this.fetchAuthorDetails(this.authorId);
		});
	}

	fetchAuthorDetails(authorId: number): void {
		this.authorService.getAuthorDetails(authorId).subscribe(
			(data) => {
				this.authorDetails = data;
			},
			(error) => {
				console.error("Error fetching author details", error);
			}
		);
	}
}
