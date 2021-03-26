import { ActionTypes, AddToCart, AddToCollection, LoadItems, RemoveAllFromCart, RemoveFromCart, StoreSearch } from "./actions";
import { BookStore } from "./models/book.model";
import { BookReducer, initialState } from "./reducer";

describe('post reducer', () => {
    it('should return the initial state', () => {
        expect(BookReducer(null, null)).toEqual(null);
    });

    it('should handle LoadSuccess', () => {
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
        const loadSuccessAction: LoadItems = {
            type: ActionTypes.LoadSuccess,
            payload: {
                items: [
                    book
                ]
            }
        };
        let expectedResult = {
            ...initialState,
            items: [
                book
            ]
        };
        expect(BookReducer(initialState, loadSuccessAction)).toEqual(expectedResult);
    });

    it('should handle Add', () => {
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
        const loadSuccessAction: AddToCart = {
            type: ActionTypes.Add,
            payload: book
        };
        let expectedResult = {
            ...initialState,
            cartItems: [
                book
            ]
        };
        expect(BookReducer(initialState, loadSuccessAction)).toEqual(expectedResult);
    });

    it('should handle RemoveFromCart', () => {

        let bookToRemove = {
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
        initialState.cartItems = [bookToRemove];
        const loadSuccessAction: RemoveFromCart = {
            type: ActionTypes.Remove,
            payload: bookToRemove
        };
        let expectedResult = {
            ...initialState,
            cartItems: [
            ]
        };
        expect(BookReducer(initialState, loadSuccessAction)).toEqual(expectedResult);
    });

    it('should handle RemoveAllFromCart', () => {

        let bookToRemove = {
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
        initialState.cartItems = [bookToRemove];
        const loadSuccessAction: RemoveAllFromCart = {
            type: ActionTypes.RemoveAll,
        };
        let expectedResult = {
            ...initialState,
            cartItems: [
            ]
        };
        expect(BookReducer(initialState, loadSuccessAction)).toEqual(expectedResult);
    });

    it('should handle AddBookToCollection', () => {

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
        const loadSuccessAction: AddToCollection = {
            type: ActionTypes.AddBookToCollection,
            payload: book
        };
        let expectedResult = {
            ...initialState,
            myCollection: [
                book
            ]
        };
        expect(BookReducer(initialState, loadSuccessAction)).toEqual(expectedResult);
    });

    it('should handle StoreSearchkey', () => {
        const loadSuccessAction: StoreSearch = {
            type: ActionTypes.StoreSearchkey,
            payload: 'book'
        };
        let expectedResult = {
            ...initialState,
            searchKey: 'book'
        };
        expect(BookReducer(initialState, loadSuccessAction)).toEqual(expectedResult);
    });

});