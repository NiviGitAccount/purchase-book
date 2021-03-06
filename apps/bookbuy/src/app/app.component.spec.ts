import { TestBed } from '@angular/core/testing';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let store: MockStore;
  let router: Router;
  let initialState = {
    book: {
      cartItems: [
        {
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
        }
      ],
      items: [{
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
      }],
      myCollection: [
        {
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
        }
      ]
    }
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [provideMockStore({ initialState })],
      imports: [
        RouterTestingModule,
        MatSidenavModule,
        MatCardModule,
        MatIconModule,
        MatToolbarModule,
        BrowserAnimationsModule,
        MatListModule,
        MatBadgeModule
      ]
    }).compileComponents();
    store = TestBed.inject(MockStore);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    router = TestBed.inject(Router);
    expect(app).toBeTruthy();
    store.setState({

    });
    fixture.detectChanges();
    store.setState({
      book: {
      }
    });
    fixture.detectChanges();
    store.setState({
      book: {
        cartItems: [
          {
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
          }
        ]
      }
    });
    fixture.detectChanges();
  });

  it(`should have as title 'bookbuy'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('bookbuy');
  });

});
