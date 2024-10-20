import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './features/search/search/search.component';
import { WishlistComponent } from './features/wishlist/wishlist/wishlist.component';
import { BooksModule } from './features/books/books.module';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    WishlistComponent
  ],
  imports: [    
	BrowserModule,
    AppRoutingModule,
	BooksModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
