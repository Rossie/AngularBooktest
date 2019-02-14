import { Component, OnInit } from '@angular/core';
import { CartserviceService } from '../services/cartservice.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  booklist: BehaviorSubject<any[]>;

  constructor(
    private cart: CartserviceService
  ) { }

  ngOnInit() {
    this.booklist = this.cart.books$;
  }

}
