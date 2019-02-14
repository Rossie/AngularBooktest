import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BooksearchComponent } from './booksearch/booksearch.component';
import { Routes } from '@angular/router';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';
import { CartwidgetComponent } from './cartwidget/cartwidget.component';
import { BooklistComponent } from './booklist/booklist.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksearchComponent,
    BookdetailsComponent,
    CartwidgetComponent,
    BooklistComponent,
    CartComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
