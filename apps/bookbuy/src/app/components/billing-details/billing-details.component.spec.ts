import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MockStore, getMockStore } from '@ngrx/store/testing';
import { BillingDetailsComponent } from './billing-details.component';
import { provideMockStore } from '@ngrx/store/testing';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { CommondModule } from 'src/app/common/common.module';
import { of } from 'rxjs';
import { Router } from '@angular/router';

describe('BillingDetailsComponent', () => {
  let component: BillingDetailsComponent;
  let fixture: ComponentFixture<BillingDetailsComponent>;
  let router: Router;
  let store: MockStore;
  let initialState = {
    book: {
      cartItems: [{
        "kind": "books#volume",
        "id": "6_AqtAEACAAJ",
        "etag": "+vnIcb2avCY",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/6_AqtAEACAAJ",
        "volumeInfo": {
          "title": "Ng-Book",
          "subtitle": "The Complete Guide to Angular 5",
          "authors": [
            "Nathaniel Murray",
            "Felipe Coury",
            "Ari Lerner",
            "Carlos Taborda"
          ],
          "publishedDate": "2018-02-06",
          "industryIdentifiers": [
            {
              "type": "ISBN_10",
              "identifier": "0991344642"
            },
            {
              "type": "ISBN_13",
              "identifier": "9780991344642"
            }
          ],
          "readingModes": {
            "text": false,
            "image": false
          },
          "printType": "BOOK",
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "preview-1.0.0",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "language": "en",
          "previewLink": "http://books.google.co.in/books?id=6_AqtAEACAAJ&dq=ng-book&hl=&cd=2&source=gbs_api",
          "infoLink": "http://books.google.co.in/books?id=6_AqtAEACAAJ&dq=ng-book&hl=&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/Ng_Book.html?hl=&id=6_AqtAEACAAJ"
        },
        "saleInfo": {
          "country": "IN",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
        },
        "accessInfo": {
          "country": "IN",
          "viewability": "NO_PAGES",
          "embeddable": false,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": false
          },
          "pdf": {
            "isAvailable": false
          },
          "webReaderLink": "http://play.google.com/books/reader?id=6_AqtAEACAAJ&hl=&printsec=frontcover&source=gbs_api",
          "accessViewStatus": "NONE",
          "quoteSharingAllowed": false
        }
      }]
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BillingDetailsComponent],
      imports: [
        FormsModule,
        CommondModule,
        MatInputModule,
        MatDialogModule,
        MatSnackBarModule,
        MatFormFieldModule,
        RouterTestingModule,
        BrowserAnimationsModule
      ],
      providers: [provideMockStore({ initialState })],
    })
      .compileComponents();
    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
  });

  it('TC 1: should create', () => {
    expect(component).toBeTruthy();
  });

  it('TC 2: should addToCollection', () => {
    fixture.detectChanges();

    const navigateSpy = spyOn(router, 'navigateByUrl');

    spyOn(component.dialog, 'open')
      .and
      .returnValue({ afterClosed: () => of(true) });
    component.addToCollection();
    expect(navigateSpy).toHaveBeenCalledWith('/my-collection');
  });

  it('TC 3: should addToCollection', () => {
    fixture.detectChanges();
    store.setState({
      book: {
        cartItems: null
      }
    });
    const navigateSpy = spyOn(router, 'navigateByUrl');

    spyOn(component.dialog, 'open')
      .and
      .returnValue({ afterClosed: () => of(true) });
    component.addToCollection();
    expect(navigateSpy).toHaveBeenCalledWith('/my-collection');
  });
});
