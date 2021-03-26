import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { GetItems, StoreSearch } from '@store/actions';


@Component({
  selector: 'myorh-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchValue = '';
  searchDisplay = true;
  searchedList = {};

  constructor(private store: Store<{
    book: {};
  }>) {
  }

  ngOnInit(): void {
  }

  setSearchDisplay(toggle) {
    this.searchDisplay = toggle;
  }

  setSearchKey() {
    this.store.dispatch(new StoreSearch(this.searchValue));
    this.store.dispatch(new GetItems(this.searchValue));
  }

}
