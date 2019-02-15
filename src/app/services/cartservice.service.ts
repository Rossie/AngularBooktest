import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Book } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

  books$: BehaviorSubject<Book[]> = new BehaviorSubject([]);

  constructor() {
    this.loadBooks();
  }

  loadBooks() {
    const books = JSON.parse(localStorage.getItem('books')) || [];
    this.books$.next(books);
  }

  addBook(book: Book) {
    const val = this.books$.getValue();
    val.push(book);
    this.books$.next(val);
    localStorage.setItem('books', JSON.stringify(val));
  }

}
