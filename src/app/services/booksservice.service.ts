import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksserviceService {

  // private bookurl = '';

  constructor(private http: HttpClient) { }

  public getBooksByTitle(title: string) {
    if (!title) { return of( [] ); } // do not search for empty string, it throws error
    return this.http.get( `https://www.googleapis.com/books/v1/volumes?maxResults=20&orderBy=newest&q=${title}` ).pipe(map( result => {
        // interface could be created to avoid TSLint error
        /* tslint:disable:no-string-literal */
        // extract 'volumeInfo' to flat array
        // return result['items'].map(item => item['volumeInfo']);
        return result['items'];
        /* tslint:enable:no-string-literal */
      }
    ));
    // some error handling would be nice
  }

  /**
   * getBookById
   */
  public getBookById(id: string) {
    return this.http.get( `https://www.googleapis.com/books/v1/volumes/${id}`);
  }
}
