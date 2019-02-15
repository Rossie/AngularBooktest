import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { Book } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class BooksserviceService {

  // private bookurl = '';

  constructor(private http: HttpClient) { }

  public getBooksByTitle(title: string): Observable<Book[]> {
    if (!title) { return of( [] ); } // do not search for empty string, it throws error
    return this.http.get<any>( `https://www.googleapis.com/books/v1/volumes?maxResults=20&orderBy=newest&q=${title}` )
      .pipe(map( result => {
        // console.log(result);
        // interface could be created to avoid TSLint error
        /* tslint:disable:no-string-literal */
        // extract 'volumeInfo' to flat array
        // return result['items'].map(item => item['volumeInfo']);
        const vols: Book[] = result.items.map(vol => ({
          id: vol.id,
          title: vol['volumeInfo'].title,
          authors: vol['volumeInfo'].authors,
          description: vol['volumeInfo'].description,
          imageLinks: vol['volumeInfo'].imageLinks
        })
        );
        /*const b: Book = {
          id: result['items'].id,
          title: result['items']['volumeInfo'].title,
          authors: result['items']['volumeInfo'].authors,
          description: result['items']['volumeInfo'].description,
          imageLinks: result['items']['volumeInfo'].imageLinks
        };*/
        return vols;
        /* tslint:enable:no-string-literal */
      }
    ));
    // some error handling would be nice
  }

  /**
   * getBookById
   */
  public getBookById(id: string): Observable<Book> {
    return this.http.get<any>( `https://www.googleapis.com/books/v1/volumes/${id}`)
      .pipe(map(vol => ({
        id: vol.id,
        title: vol['volumeInfo'].title,
        authors: vol['volumeInfo'].authors,
        description: vol['volumeInfo'].description,
        imageLinks: vol['volumeInfo'].imageLinks
      }))
    );
  }
}
