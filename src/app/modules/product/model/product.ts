import { PalletteType } from "./palletteType";
import { ProductType } from "./productType";

export interface Product{
    height: number,
    width: number,
    palletteType: PalletteType,
    productType: ProductType,
    image:string
}