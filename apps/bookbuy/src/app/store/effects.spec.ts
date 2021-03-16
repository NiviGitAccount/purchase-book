import { TestBed } from "@angular/core/testing";
import { Action, StoreModule } from "@ngrx/store";
import { provideMockActions } from '@ngrx/effects/testing';
import { BookService } from "@services/book.service";
import { EMPTY, Observable, of, throwError } from "rxjs";
import { ActionTypes } from "./actions";
import { BookEffects } from "./effects";
import { provideMockStore } from "@ngrx/store/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { HttpErrorResponse } from "@angular/common/http";

describe('BookEffects', () => {
    let actions$: Observable<Action>;
    let bookService: BookService;
    let bookEffects: BookEffects;
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
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                StoreModule.forRoot({}),
                HttpClientTestingModule
            ],
            providers: [
                BookEffects,
                provideMockActions(() => actions$),
                provideMockStore({ initialState }),
            ]
        });
        bookEffects = TestBed.inject(BookEffects);
        bookService = TestBed.inject(BookService);
    });
    it('should get the items and emit when the service call is successful', () => {
        const action = ActionTypes.LoadItems;

        const books = [];

        jest.spyOn(bookService, 'getSearchedBooks').mockReturnValue(of(books));

        actions$ = of({ type: action });

        bookEffects.loadBooks$.subscribe(action => {
            expect(action.type).toEqual(ActionTypes.LoadSuccess);
            expect(action.payload).toEqual([]);
        });
    });

    it('should get the items and emit when the service call is successful', () => {
        const action = ActionTypes.LoadItems;


        spyOn(bookService, 'getSearchedBooks').and.callFake(() => {
            return throwError(new HttpErrorResponse({
                error: {
                    'status': {
                        'code': 400
                    }
                }
            }));
        });

        actions$ = of({ type: action });

        bookEffects.loadBooks$.subscribe(action => {
            expect(action).toEqual(EMPTY);
        });
    });
});