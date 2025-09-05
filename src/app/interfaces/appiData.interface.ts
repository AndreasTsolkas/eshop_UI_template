export interface ApiData {
    products: { [key: string]: Product }; 
}

export interface Product {
    id: number,
    name: string,
    price: number,
    active: boolean,
    imagePath: string
}