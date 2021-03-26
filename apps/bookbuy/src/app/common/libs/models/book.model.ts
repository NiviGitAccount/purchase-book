export interface BookStore {
    items: [],
    cartItems: Book[],
    collectionItems: [],
    searchKey: "",
    myCollection: []
}

export interface Book {
    kind: string;
    id: string;
    etag: string;
    selfLink: string;
    volumeInfo: any;
    saleInfo: any;
    accessInfo: any;
}

export interface NavItem {
    displayName: string;
    disabled?: boolean;
    iconName: string;
    route?: string;
    tag?: boolean;
}