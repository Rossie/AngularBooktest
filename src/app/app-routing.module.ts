import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksearchComponent } from './booksearch/booksearch.component';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  // default route
  { path: '', redirectTo: '/book', pathMatch: 'full' },

  { path: 'book', component: BooksearchComponent },
  { path: 'bookdetails/:id', component: BookdetailsComponent },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
