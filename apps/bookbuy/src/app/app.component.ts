
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { NavItem } from './common/libs/models/book.model';



@Component({
  selector: 'myorh-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;
  navMenuItem: NavItem[] = [];
  cartItemsCount: any;
  title = 'bookbuy';


  private _mobileQueryListener: () => void;


  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private store: Store<{
    book: {};
  }>) {
    this.navMenuItem = [{
      displayName: 'Search',
      iconName: 'search',
      route: 'search'
    },
    {
      displayName: 'Cart',
      iconName: 'shopping_cart',
      route: 'cart',
      tag: true
    },
    {
      displayName: 'My Collection',
      iconName: 'library_books',
      route: 'my-collection'
    }]
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    // this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    // this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.store.pipe(select('book')).subscribe(data => {
      this.cartItemsCount = data ? (data['cartItems'] ? data['cartItems'].length : null) : null;
    });
  }

  ngOnDestroy(): void {
    // this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}