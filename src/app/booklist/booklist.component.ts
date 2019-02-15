import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../interfaces';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})


export class BooklistComponent implements OnInit {

  @Input() booklist: Book[];

  constructor() { }

  ngOnInit() {
  }

}
