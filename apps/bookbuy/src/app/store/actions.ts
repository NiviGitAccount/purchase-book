import { Action } from '@ngrx/store';
import { Book } from './models/book.model';



export enum ActionTypes {
    Add = '[Book] Add to cart',
    Remove = '[Book] Remove from cart',
    LoadItems = '[Book] Load items from server',
    LoadSuccess = '[Book] Load success',
    StoreSearchkey = '[Book] Store search key',
    AddBookToCollection = '[Book] Store purchased book',
    RemoveAll = '[Book] Remove all the cart items',
}

export class AddToCart implements Action {
    readonly type = ActionTypes.Add;

    constructor(public payload: Book) { }
}

export class GetItems implements Action {
    readonly type = ActionTypes.LoadItems;

    constructor(public payload: String) { }
}

export class RemoveFromCart implements Action {
    readonly type = ActionTypes.Remove;

    constructor(public payload: Book) { }
}

export class RemoveAllFromCart implements Action {
    readonly type = ActionTypes.RemoveAll;

    constructor() { }
}

export class LoadItems implements Action {
    readonly type = ActionTypes.LoadSuccess;

    constructor(public payload: {}) { }
}

export class StoreSearch implements Action {
    readonly type = ActionTypes.StoreSearchkey;

    constructor(public payload: String) { }
}

export class AddToCollection implements Action {
    readonly type = ActionTypes.AddBookToCollection;

    constructor(public payload: {}) { }
}

export type ActionsUnion = AddToCart | RemoveFromCart | LoadItems | GetItems | StoreSearch | AddToCollection | RemoveAllFromCart;    