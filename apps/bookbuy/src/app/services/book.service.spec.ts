import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { BookService } from './book.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';

describe('BookService', () => {
  let service: BookService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(BookService);
    httpClient = TestBed.inject(HttpClient);
  });

  it('TC 1: should be created', () => {
    expect(service).toBeTruthy();
  });

  it('TC 2: should hit getSearchedBooks API', () => {
    spyOn(httpClient, 'get').and.returnValue(of(<HttpResponse<any>>{
      body: {}
    }));
    service.getSearchedBooks({ payload: 'java' });
    expect(httpClient.get).toBeCalled();
  });

});
