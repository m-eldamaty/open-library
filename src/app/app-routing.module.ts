import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorDetailsComponent } from './features/books/author-details/author-details.component';
import { BookDetailsComponent } from './features/books/book-details/book-details.component';
import { HomeComponent } from './features/books/home/home.component';
import { SearchComponent } from './features/search/search/search.component';
import { WishlistComponent } from './features/wishlist/wishlist/wishlist.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'book/:id', component: BookDetailsComponent },
	{ path: 'author/:id', component: AuthorDetailsComponent },
	{ path: 'search', component: SearchComponent },
	{ path: 'wishlist', component: WishlistComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
