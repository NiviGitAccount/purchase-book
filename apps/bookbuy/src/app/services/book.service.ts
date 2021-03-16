import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getSearchedBooks(action) {
    return this.http.get('https://www.googleapis.com/books/v1/volumes?q=' + action.payload);
  }

}
