import { ActionTypes, AddToCart, AddToCollection, GetItems, LoadItems, RemoveAllFromCart, RemoveFromCart, StoreSearch } from "./actions";
import { Book } from "./models/book.model";

describe('AddToCart', () => {
    it('should create an action', () => {
        let payload: Book = {
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
        const action = new AddToCart(payload);

        expect({ ...action }).toEqual({
            type: ActionTypes.Add,
            payload
        });
    });
});

describe('GetItems', () => {
    it('should create an action', () => {
        let payload = 'java'
        const action = new GetItems(payload);

        expect({ ...action }).toEqual({
            type: ActionTypes.LoadItems,
            payload
        });
    });
});

describe('RemoveFromCart', () => {
    it('should create an action', () => {
        let payload: Book = {
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
        const action = new RemoveFromCart(payload);

        expect({ ...action }).toEqual({
            type: ActionTypes.Remove,
            payload
        });
    });
});

describe('RemoveAllFromCart', () => {
    it('should create an action', () => {
        const action = new RemoveAllFromCart();
        expect({ ...action }).toEqual({
            type: ActionTypes.RemoveAll,
        });
    });
});

describe('LoadItems', () => {
    it('should create an action', () => {
        const action = new LoadItems({});
        expect({ ...action }).toEqual({
            type: ActionTypes.LoadSuccess,
            payload: {}
        });
    });
});

describe('StoreSearch', () => {
    it('should create an action', () => {
        let payload = 'StoreSearch'
        const action = new StoreSearch(payload);
        expect({ ...action }).toEqual({
            type: ActionTypes.StoreSearchkey,
            payload
        });
    });
});

describe('AddToCollection', () => {
    it('should create an action', () => {
        let payload = {}
        const action = new AddToCollection(payload);
        expect({ ...action }).toEqual({
            type: ActionTypes.AddBookToCollection,
            payload
        });
    });
});