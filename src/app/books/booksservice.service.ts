import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksserviceService {

  private bookurl = 'https://www.googleapis.com/books/v1/volumes?maxResults=20&orderBy=newest&q=';

  constructor(private http: HttpClient) { }

  public getBooksByTitle(title: string) {
    return this.http.get(this.bookurl + title).pipe(map( result => {
        // interface could be created to avoid TSLint error
        /* tslint:disable:no-string-literal */
        // extract 'volumeInfo' to flat array
        return result['items'].map(item => item['volumeInfo']);
        /* tslint:enable:no-string-literal */
      }
    ));
    // some error handling would be nice
  }
}
