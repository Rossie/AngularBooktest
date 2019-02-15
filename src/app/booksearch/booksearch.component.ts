import { Component, OnInit } from '@angular/core';
import { BooksserviceService } from '../services/booksservice.service';
import { Observable, combineLatest } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { Book } from '../interfaces';

@Component({
  selector: 'app-booksearch',
  templateUrl: './booksearch.component.html',
  styleUrls: ['./booksearch.component.css'],
  providers: [BooksserviceService]
})
export class BooksearchComponent implements OnInit {

  booklist: Observable<Book[]>;
  searchField: FormControl;
  searchFieldMulti: FormControl;

  constructor(
    private books: BooksserviceService
  ) {
    this.searchField = new FormControl('');
    this.searchFieldMulti = new FormControl('harry, whatever');
  }

  searchbook = ''; // search input value
  searchbookMulti = ''; // multiple search input value
  multiHide = true; // show/hide multiple search bar

  ngOnInit() {
    this.searchField.valueChanges.pipe(debounceTime(400), distinctUntilChanged()).subscribe(
      value => {
        this.booklist = this.books.getBooksByTitle(value);
      }
    );

    this.searchFieldMulti.valueChanges.pipe(debounceTime(600), distinctUntilChanged()).subscribe(
      value => {
        // create array of http search for each comma separated string
        const searchAll$ = value.split(',').map(title => this.books.getBooksByTitle(title.trim()));
        // combine resulted observables and wait all of them ot produce result
        this.booklist = combineLatest<Book[]>(...searchAll$).pipe(
          map(results => {
            // Comine all results into a flat array
            // extract 'volumeInfo' to flat array (not sure is there better solution than type casting here..)
            return results.reduce((prev, curr) => [...prev as Book[], ...curr as Book[]], []);
          }));
      }
    );
  }

  /**
   * search
   */
  public search() {
    this.booklist = this.books.getBooksByTitle(this.searchField.value);
  }

  public searchMulti() {
    // trigger 'valueChanges' Observable to emit value:
    this.searchFieldMulti.setValue(this.searchFieldMulti.value);
  }

}
