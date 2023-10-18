import { Injectable } from '@angular/core';
import { Product } from './model/product';
import { ProductType } from './model/productType';
import { Category } from './model/category';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products!: Product[];

  constructor() { }

  getProductsByCategory(category: string): Observable<Product[]> {
    const filteredProducts = this.data.filter(p => p.category === category);
    return of(filteredProducts);
  }

  category: Category[] = [
    {
      name: '800x600'
    },
    {
      name: '800x1200'
    },
    {
      name: '800x1200 SOLID'
    },
    {
      name: '1200x1000'
    },
    {
      name: '1200x1000 ANGIELSKA'
    },
    {
      name: '1200x1000 PŁOZOWA'
    },
    {
      name: '1600x800'
    },
    {
      name: '1600x800 SOLID'
    },
    {
      name: '1600x1200'
    },
    {
      name: '1800x1200'
    },
    {
      name: 'KĄTOWNIK'
    }
  ]

  data: Product[] = [
    {
      height: 800,
      width: 600,
      productType: ProductType.PALLET,
      category: '800x600',
      image: "../assets/PaletyObrazki/produktyRozmiary/800x600/40.JPG"
    },
    {
      height: 800,
      width: 600,
      productType: ProductType.PALLET,
      category: '800x600',
      image: "../assets/PaletyObrazki/produktyRozmiary/800x600/41.JPG"
    },
    {
      height: 800,
      width: 600,
      productType: ProductType.PALLET,
      category: '800x600',
      image: "../assets/PaletyObrazki/produktyRozmiary/800x600/42.JPG"
    },
    {
      height: 800,
      width: 1200,
      productType: ProductType.PALLET,
      category: '800x1200',
      image: "../assets/PaletyObrazki/produktyRozmiary/800x1200/8.JPG"
    },
    {
      height: 800,
      width: 1200,
      productType: ProductType.PALLET,
      category: '800x1200',
      image: "../assets/PaletyObrazki/produktyRozmiary/800x1200/9.JPG"
    },
    {
      height: 800,
      width: 1200,
      productType: ProductType.PALLET,
      category: '800x1200',
      image: "../assets/PaletyObrazki/produktyRozmiary/800x1200/10.JPG"
    },
    {
      height: 800,
      width: 1200,
      productType: ProductType.PALLET,
      category: '800x1200',
      image: "../assets/PaletyObrazki/produktyRozmiary/800x1200/11.1.JPG"
    },
    {
      height: 800,
      width: 1200,
      productType: ProductType.PALLET,
      category: '800x1200',
      image: "../assets/PaletyObrazki/produktyRozmiary/800x1200/11.JPG"
    },
    {
      height: 800,
      width: 1200,
      productType: ProductType.PALLET,
      category: '800x1200',
      image: "../assets/PaletyObrazki/produktyRozmiary/800x1200/12.JPG"
    },
    {
      height: 800,
      width: 1200,
      category: '800x1200',
      productType: ProductType.PALLET,
      image: "../assets/PaletyObrazki/produktyRozmiary/800x1200/13.JPG"
    },
    {
      height: 800,
      width: 1200,
      category: '800x1200',
      productType: ProductType.PALLET,
      image: "../assets/PaletyObrazki/produktyRozmiary/800x1200/14.JPG"
    },
    {
      height: 800,
      width: 1200,
      category: '800x1200',
      productType: ProductType.PALLET,
      image: "../assets/PaletyObrazki/produktyRozmiary/800x1200/15.JPG"
    },
    {
      height: 800,
      width: 1200,
      category: '800x1200',
      productType: ProductType.PALLET,
      image: "../assets/PaletyObrazki/produktyRozmiary/800x1200/16.JPG"
    },
    {
      height: 800,
      width: 1200,
      category: '800x1200 SOLID',
      productType: ProductType.PALLET_SOLID,
      image: "../assets/PaletyObrazki/produktyRozmiary/800x1200solid/21.JPG"
    },
    {
      height: 800,
      width: 1200,
      category: '800x1200 SOLID',
      productType: ProductType.PALLET_SOLID,
      image: "../assets/PaletyObrazki/produktyRozmiary/800x1200solid/22.JPG"
    },
    {
      height: 800,
      width: 1200,
      category: '800x1200 SOLID',
      productType: ProductType.PALLET_SOLID,
      image: "../assets/PaletyObrazki/produktyRozmiary/800x1200solid/23.JPG"
    },
    {
      height: 800,
      width: 1200,
      category: '800x1200 SOLID',
      productType: ProductType.PALLET_SOLID,
      image: "../assets/PaletyObrazki/produktyRozmiary/800x1200solid/24.JPG"
    },
    {
      height: 800,
      width: 1200,
      category: '800x1200 SOLID',
      productType: ProductType.PALLET_SOLID,
      image: "../assets/PaletyObrazki/produktyRozmiary/800x1200solid/24.JPG"
    },
    {
      height: 800,
      width: 1200,
      category: '800x1200 SOLID',
      productType: ProductType.PALLET_SOLID,
      image: "../assets/PaletyObrazki/produktyRozmiary/800x1200solid/25.JPG"
    },
    {
      height: 800,
      width: 1200,
      category: '800x1200 SOLID',
      productType: ProductType.PALLET_SOLID,
      image: "../assets/PaletyObrazki/produktyRozmiary/800x1200solid/26.JPG"
    },
    {
      height: 1200,
      width: 1000,
      productType: ProductType.PALLET,
      category: '1200x1000',
      image: "../assets/PaletyObrazki/produktyRozmiary/1200x1000/6.JPG"
    },
    {
      height: 1200,
      width: 1000,
      productType: ProductType.PALLET,
      category: '1200x1000',
      image: "../assets/PaletyObrazki/produktyRozmiary/1200x1000/7.JPG"
    },
    {
      height: 1200,
      width: 1000,
      productType: ProductType.PALLET,
      category: '1200x1000',
      image: "../assets/PaletyObrazki/produktyRozmiary/1200x1000/19.JPG"
    },
    {
      height: 1200,
      width: 1000,
      productType: ProductType.PALLET,
      category: '1200x1000',
      image: "../assets/PaletyObrazki/produktyRozmiary/1200x1000/20.JPG"
    },
    {
      height: 1200,
      width: 1000,
      productType: ProductType.PALLET_ENGLISH,
      category: '1200x1000 ANGIELSKA',
      image: "../assets/PaletyObrazki/produktyRozmiary/1200x1000paletaAngielska/36.JPG"
    },
    {
      height: 1200,
      width: 1000,
      productType: ProductType.PALLET_ENGLISH,
      category: '1200x1000 ANGIELSKA',
      image: "../assets/PaletyObrazki/produktyRozmiary/1200x1000paletaAngielska/37.JPG"
    },
    {
      height: 1200,
      width: 1000,
      productType: ProductType.PALLET_ENGLISH,
      category: '1200x1000 ANGIELSKA',
      image: "../assets/PaletyObrazki/produktyRozmiary/1200x1000paletaAngielska/38.JPG"
    },
    {
      height: 1200,
      width: 1000,
      productType: ProductType.PALLET_ENGLISH,
      category: '1200x1000 ANGIELSKA',
      image: "../assets/PaletyObrazki/produktyRozmiary/1200x1000paletaAngielska/39.JPG"
    },
    {
      height: 1200,
      width: 1000,
      productType: ProductType.PALLET_SKID,
      category: '1200x1000 PŁOZOWA',
      image: "../assets/PaletyObrazki/produktyRozmiary/1200x1000paletaPłozowa/1.jpg"
    },
    {
      height: 1200,
      width: 1000,
      productType: ProductType.PALLET_SKID,
      category: '1200x1000 PŁOZOWA',
      image: "../assets/PaletyObrazki/produktyRozmiary/1200x1000paletaPłozowa/2.jpg"
    },
    {
      height: 1200,
      width: 1000,
      productType: ProductType.PALLET_SKID,
      category: '1200x1000 PŁOZOWA',
      image: "../assets/PaletyObrazki/produktyRozmiary/1200x1000paletaPłozowa/3.jpg"
    },
    {
      height: 1200,
      width: 1000,
      productType: ProductType.PALLET_SKID,
      category: '1200x1000 PŁOZOWA',
      image: "../assets/PaletyObrazki/produktyRozmiary/1200x1000paletaPłozowa/4.jpg"
    },
    {
      height: 1200,
      width: 1000,
      productType: ProductType.PALLET_SKID,
      category: '1200x1000 PŁOZOWA',
      image: "../assets/PaletyObrazki/produktyRozmiary/1200x1000paletaPłozowa/5.jpg"
    },
    {
      height: 1200,
      width: 1000,
      productType: ProductType.PALLET_SKID,
      category: '1200x1000 PŁOZOWA',
      image: "../assets/PaletyObrazki/produktyRozmiary/1200x1000paletaPłozowa/6.jpg"
    },
    {
      height: 1200,
      width: 1000,
      productType: ProductType.PALLET_SKID,
      category: '1200x1000 PŁOZOWA',
      image: "../assets/PaletyObrazki/produktyRozmiary/1200x1000paletaPłozowa/7.jpg"
    },
    {
      height: 1200,
      width: 1000,
      productType: ProductType.PALLET_SKID,
      category: '1200x1000 PŁOZOWA',
      image: "../assets/PaletyObrazki/produktyRozmiary/1200x1000paletaPłozowa/17.jpg"
    },
    {
      height: 1200,
      width: 1000,
      productType: ProductType.PALLET_SKID,
      category: '1200x1000 PŁOZOWA',
      image: "../assets/PaletyObrazki/produktyRozmiary/1200x1000paletaPłozowa/18.jpg"
    },
    {
      height: 1200,
      width: 1000,
      productType: ProductType.PALLET_SKID,
      category: '1200x1000 PŁOZOWA',
      image: "../assets/PaletyObrazki/produktyRozmiary/1200x1000paletaPłozowa/17.1.jpg"
    },
    {
      height: 1600,
      width: 800,
      productType: ProductType.PALLET,
      category: '1600x800',
      image: "../assets/PaletyObrazki/produktyRozmiary/1600x800/27.JPG"
    },
    {
      height: 1600,
      width: 800,
      productType: ProductType.PALLET,
      category: '1600x800',
      image: "../assets/PaletyObrazki/produktyRozmiary/1600x800/28.JPG"
    },
    {
      height: 1600,
      width: 800,
      productType: ProductType.PALLET,
      category: '1600x800',
      image: "../assets/PaletyObrazki/produktyRozmiary/1600x800/29.JPG"
    },
    {
      height: 1600,
      width: 800,
      productType: ProductType.PALLET_SOLID,
      category: '1600x800 SOLID',
      image: "../assets/PaletyObrazki/produktyRozmiary/1600x800solid/32.JPG"
    },
    {
      height: 1600,
      width: 800,
      productType: ProductType.PALLET_SOLID,
      category: '1600x800 SOLID',
      image: "../assets/PaletyObrazki/produktyRozmiary/1600x800solid/33.JPG"
    },
    {
      height: 1600,
      width: 800,
      productType: ProductType.PALLET_SOLID,
      category: '1600x800 SOLID',
      image: "../assets/PaletyObrazki/produktyRozmiary/1600x800solid/34.JPG"
    },
    {
      height: 1600,
      width: 800,
      productType: ProductType.PALLET_SOLID,
      category: '1600x800 SOLID',
      image: "../assets/PaletyObrazki/produktyRozmiary/1600x800solid/35.JPG"
    },
    {
      height: 1600,
      width: 1200,
      productType: ProductType.PALLET,
      category:'1600x1200',
      image: "../assets/PaletyObrazki/produktyRozmiary/1600x1200/30.JPG"
    },
    {
      height: 1600,
      width: 1200,
      productType: ProductType.PALLET,
      category:'1600x1200',
      image: "../assets/PaletyObrazki/produktyRozmiary/1600x1200/31.JPG"
    },
    {
      height: 1800,
      width: 1200,
      category:'1800x1200',
      productType: ProductType.PALLET,
      image: "../assets/PaletyObrazki/produktyRozmiary/1800x1200/1.JPG"
    },
    {
      height: 1800,
      width: 1200,
      productType: ProductType.PALLET,
      category:'1800x1200',
      image: "../assets/PaletyObrazki/produktyRozmiary/1800x1200/2.JPG"
    },
    {
      height: 1800,
      width: 1200,
      productType: ProductType.PALLET,
      category:'1800x1200',
      image: "../assets/PaletyObrazki/produktyRozmiary/1800x1200/3.JPG"
    },
    {
      height: 0,
      width: 0,
      productType: ProductType.ANGLEBAR,
      category: 'KĄTOWNIK',
      image: "../assets/PaletyObrazki/produktyRozmiary/katownik/5.JPG"
    },
  ];
}


