import { ActionsUnion, ActionTypes } from './actions';
import { BookStore } from './models/book.model';

export const initialState: BookStore = {
    items: [],
    cartItems: [],
    collectionItems: [],
    searchKey: "",
    myCollection: []
};

export function BookReducer(state = initialState, action: ActionsUnion) {
    if (action) {
        switch (action.type) {
            case ActionTypes.LoadSuccess:
                return {
                    ...state,
                    items: [...action.payload['items']]
                };

            case ActionTypes.Add:
                return {
                    ...state,
                    cartItems: [...state.cartItems, action.payload]
                };

            case ActionTypes.Remove:
                return {
                    ...state,
                    cartItems: [...state.cartItems.filter(item => item['id'] !== action.payload.id)]
                };


            case ActionTypes.StoreSearchkey:
                return {
                    ...state,
                    searchKey: action.payload
                }

            case ActionTypes.AddBookToCollection:
                return {
                    ...state,
                    myCollection: [...state.myCollection, action.payload]
                }

            case ActionTypes.RemoveAll:
                return {
                    ...state,
                    cartItems: []
                }
        }
    } else {
        return state;
    }
}