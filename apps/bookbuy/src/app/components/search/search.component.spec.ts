import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { BookService } from '@services/book.service';
import { SharedModule } from '@shared/shared.module';
import { CommondModule } from 'src/app/common/common.module';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
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
      declarations: [SearchComponent],
      imports: [
        FormsModule,
        SharedModule,
        MatIconModule,
        MatInputModule,
        HttpClientModule,
        MatFormFieldModule,
        RouterTestingModule,
        BrowserAnimationsModule
      ],
      providers: [provideMockStore({ initialState }), BookService],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('TC 1: should create', () => {
    expect(component).toBeTruthy();
  });


  it('TC 2: should toggle search field', () => {
    fixture.detectChanges();
    component.setSearchDisplay(true);
    expect(component.searchDisplay).toBeTruthy();
  });

  it('TC 3: should store the search value into the store', () => {
    fixture.detectChanges();
    component.searchValue = 'java';
    component.setSearchKey();
  });

});
