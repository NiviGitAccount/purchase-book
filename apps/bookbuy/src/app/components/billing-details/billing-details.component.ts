import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { select, Store } from '@ngrx/store';
import { AddToCollection, RemoveAllFromCart, RemoveFromCart } from '@store/actions';
import { MatDialog } from '@angular/material/dialog';
import { MessagePopupComponent } from 'src/app/common/components/message-popup/message-popup.component';

@Component({
  selector: 'myorh-billing-details',
  templateUrl: './billing-details.component.html',
  styleUrls: ['./billing-details.component.scss']
})
export class BillingDetailsComponent implements OnInit {

  uname: '';
  email: '';
  phone: '';
  address: '';
  booklist: [];

  constructor(private _snackBar: MatSnackBar,
    private router: Router,
    public dialog: MatDialog,
    private store: Store<{
      book: {};
    }>) { }

  ngOnInit(): void {
  }

  addToCollection() {
    this.store.pipe(select('book')).subscribe(data => {
      this.booklist = data['cartItems'] ? data['cartItems'] : null;
    });
    this.store.dispatch(new AddToCollection({
      uname: this.uname,
      email: this.email,
      phone: this.phone,
      address: this.address,
      booklist: this.booklist
    }));
    this.openSnackBar();
  }

  openSnackBar() {
    const dialogRef = this.dialog.open(MessagePopupComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.store.dispatch(new RemoveAllFromCart());
      this.router.navigateByUrl('/my-collection');
    });
  }

}

