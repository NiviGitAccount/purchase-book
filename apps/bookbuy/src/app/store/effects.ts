import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { EMPTY } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { BookService } from '@services/book.service';
import { ActionTypes } from './actions';

@Injectable()
export class BookEffects {
    constructor(
        private actions$: Actions,
        private bookService: BookService
    ) { }


    loadBooks$ = createEffect(() => {
        return this.actions$.pipe(ofType(ActionTypes.LoadItems),
            switchMap((action) =>
                this.bookService.getSearchedBooks(action).pipe(
                    map(books => {
                        return { type: ActionTypes.LoadSuccess, payload: books };
                    }),
                    catchError(() => EMPTY)
                )
            ));
    });
}