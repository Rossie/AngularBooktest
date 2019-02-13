import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksserviceService } from '../services/booksservice.service';
import { Observable } from 'rxjs';
import { CartserviceService } from '../services/cartservice.service';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})

export class BookdetailsComponent implements OnInit {

  book = {};

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getBookById(id).subscribe(
      result => this.book = result
    );
  }

  constructor(
    private route: ActivatedRoute,
    private service: BooksserviceService,
    private cart: CartserviceService,
  ) {}

  addToCart() {
    this.cart.addBook(this.book);
  }
}
