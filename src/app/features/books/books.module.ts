import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { AuthorDetailsComponent } from './author-details/author-details.component';



@NgModule({
  declarations: [
    HomeComponent,
    BookDetailsComponent,
    AuthorDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BooksModule { }
