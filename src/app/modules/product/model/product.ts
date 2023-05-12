import { ProductType } from "./productType";

export interface Product{
    height: number,
    width: number,
    productType: ProductType,
    category: string,
    image:string
}