import { TestBed } from '@angular/core/testing';

import { BooksserviceService } from './booksservice.service';

describe('BooksserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BooksserviceService = TestBed.get(BooksserviceService);
    expect(service).toBeTruthy();
  });
});
