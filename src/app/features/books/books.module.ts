import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { BookDetailsComponent } from "./book-details/book-details.component";
import { AuthorDetailsComponent } from "./author-details/author-details.component";
import { LoadingComponent } from "src/app/shared/loading/loading.component";

@NgModule({
	declarations: [
		HomeComponent,
		BookDetailsComponent,
		AuthorDetailsComponent,
		LoadingComponent,
	],
	imports: [CommonModule, RouterModule],
})
export class BooksModule {}
