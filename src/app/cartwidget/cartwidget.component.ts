import { Component, OnInit } from '@angular/core';
import { CartserviceService } from '../services/cartservice.service';

@Component({
  selector: 'app-cartwidget',
  templateUrl: './cartwidget.component.html',
  styleUrls: ['./cartwidget.component.css']
})
export class CartwidgetComponent implements OnInit {

  cartcount = 0;

  constructor(
    private cart: CartserviceService,
  ) { }

  ngOnInit() {
    this.cart.books$.subscribe(books => {
      this.cartcount = books.length;
    });
  }

}
