import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BooksserviceService } from './books/booksservice.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BooksearchComponent } from './books/booksearch.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: BooksearchComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BooksearchComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [BooksserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
