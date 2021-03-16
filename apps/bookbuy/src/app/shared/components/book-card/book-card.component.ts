import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AddToCart, RemoveFromCart } from '@store/actions';

@Component({
  selector: 'my-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {

  @Input() type: string;
  @Output() searchDisplay = new EventEmitter<boolean>();
  selectedBook = null;
  collectionItems = null;
  fulldescription = false;
  cartItems: any;
  data = [];

  constructor(private store: Store<{
    book: {};
  }>,
    private router: Router,
  ) { }

  ngOnInit(): void {

    this.store.pipe(select('book')).subscribe(data => {
      if (data) {
        this.data = data['items'] ? data['items'] : null;
        this.cartItems = data['cartItems'] ? data['cartItems'] : null;
        this.collectionItems = data['myCollection'] ? data['myCollection'] : null;
      }
    });

  }

  showDetails(book) {
    this.searchDisplay.emit(false);
    this.type = 'bookdetail';
    this.selectedBook = book;
    this.fulldescription = true;
  }

  showList() {
    this.searchDisplay.emit(true);
    this.type = 'booklist';
  }

  navigateToBill() {
    this.router.navigateByUrl('/billing-details');
  }

  addToCart(book) {
    this.store.dispatch(new AddToCart(book));
    this.type = 'booklist';
  }

  removeFromCart(book) {
    this.store.dispatch(new RemoveFromCart(book));
  }

}
