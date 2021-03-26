import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { BookCardComponent } from './book-card.component';

describe('BookCardComponent', () => {
  let component: BookCardComponent;
  let fixture: ComponentFixture<BookCardComponent>;
  let router: Router;
  let store: MockStore;
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
      imports: [
        RouterTestingModule
      ],
      declarations: [BookCardComponent],
      providers: [provideMockStore({ initialState })]
    })
      .compileComponents();
    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookCardComponent);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('TC 1: should create', () => {
    store.setState({
    });
    fixture.detectChanges();
    store.setState({
      book: {
      }
    });
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('TC 2: should call showDetails', () => {
    let book = {
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
    component.showDetails(book);
    expect(component.type).toBe('bookdetail');
  });

  it('TC 3: should call showList', () => {
    component.showList();
    expect(component.type).toBe('booklist');
  });

  it('TC 4: should call navigateToBill', () => {
    const navigateSpy = spyOn(router, 'navigateByUrl');
    component.navigateToBill();
    expect(navigateSpy).toHaveBeenCalledWith('/billing-details');
  });

  it('TC 5: should call addToCart', () => {
    let book = {
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
    component.addToCart(book);
    expect(component.type).toBe('booklist');
  });

  it('TC 6: should call removeFromCart', () => {
    let book = {
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
    component.removeFromCart(book);
  });

});
