import { Component, OnInit } from '@angular/core';
import { Gallery, GalleryItem, ImageSize, ThumbnailsPosition } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';
import { Product } from './model/product';
import { ProductType } from './model/productType';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{

  pallet_800x600!: Product[];
  pallet_800x1200!: Product[];
  palletSolid_800x1200!: Product[];
  pallet_1200x1000!: Product[];
  palletEnglish_1200x1000!: Product[];
  palletSkid_1200x1000!: Product[];
  pallet_1600x800!: Product[];
  palletSolid_1600x800!: Product[];
  pallet_1600x1200!: Product[];
  pallet_1800x1200!: Product[];
  angleBar!: Product[];

  items!: GalleryItem[];

  constructor(public gallery: Gallery, public lightbox: Lightbox) {}

  ngOnInit() {
    this.pallet_800x600 = this.data.filter(item => item.height === 800 && item.width === 600);
    this.pallet_800x1200 = this.data.filter(item => item.height === 800 && item.width === 1200);
    this.pallet_1200x1000 = this.data.filter(item => item.height === 1200 && item.width === 1000);
    this.palletSolid_800x1200 = this.data.filter(item => item.height === 800 && item.width === 1200 && item.productType === ProductType.PALLET_SOLID);
    this.palletSolid_1600x800 = this.data.filter(item => item.height === 1600 && item.width === 800 && item.productType === ProductType.PALLET_SOLID);
    this.palletEnglish_1200x1000 = this.data.filter(item => item.height === 1200 && item.width === 1000 && item.productType === ProductType.PALLET_ENGLISH);
    this.palletSkid_1200x1000 = this.data.filter(item => item.height === 1200 && item.width === 1000 && item.productType === ProductType.PALLET_SKID);
    this.pallet_1600x800 = this.data.filter(item => item.height === 1600 && item.width === 800);
    this.pallet_1600x1200 = this.data.filter(item => item.height === 1600 && item.width === 1200);
    this.pallet_1800x1200 = this.data.filter(item => item.height === 1800 && item.width === 1200);
    this.angleBar = this.data.filter(item => item.productType === ProductType.ANGLEBAR);

    const lightboxRef = this.gallery.ref('lightbox');

    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top
    });

    lightboxRef.load(this.items); 
  }

  data:Product[] = [
    {
      height: 800,
      width: 600,
      productType: ProductType.PALLET,
      image: "../assets/PaletyObrazki/produktyRozmiary/800x600/40.JPG"
    },
    {
      height: 800,
      width: 600,
      productType: ProductType.PALLET,
      image: "../assets/PaletyObrazki/produktyRozmiary/800x600/41.JPG"
    },
    {
      height: 800,
      width: 600,
      productType: ProductType.PALLET,
      image: "../assets/PaletyObrazki/produktyRozmiary/800x600/42.JPG"
    },
    {
      height: 800,
      width: 1200,
      productType: ProductType.PALLET,
      image: "../assets/PaletyObrazki/produktyRozmiary/800x1200/8.JPG"
    },
    {
      height: 800,
      width: 1200,
      productType: ProductType.PALLET,
      image: "../assets/PaletyObrazki/produktyRozmiary/800x1200/9.JPG"
    },
    {
      height: 800,
      width: 1200,
      productType: ProductType.PALLET,
      image: "../assets/PaletyObrazki/produktyRozmiary/800x1200/10.JPG"
    },
    {
      height: 800,
      width: 1200,
      productType: ProductType.PALLET,
      image: "../assets/PaletyObrazki/produktyRozmiary/800x1200/11.1.JPG"
    },
    {
      height: 800,
      width: 1200,
      productType: ProductType.PALLET,
      image: "../assets/PaletyObrazki/produktyRozmiary/800x1200/11.JPG"
    },
    {
      height: 800,
      width: 1200,
      productType: ProductType.PALLET,
      image: "../assets/PaletyObrazki/produktyRozmiary/800x1200/12.JPG"
    },
    {
      height: 800,
      width: 1200,
      productType: ProductType.PALLET,
      image: "../assets/PaletyObrazki/produktyRozmiary/800x1200/13.JPG"
    },
    {
      height: 800,
      width: 1200,
      productType: ProductType.PALLET,
      image: "../assets/PaletyObrazki/produktyRozmiary/800x1200/14.JPG"
    },
    {
      height: 800,
      width: 1200,
      productType: ProductType.PALLET,
      image: "../assets/PaletyObrazki/produktyRozmiary/800x1200/15.JPG"
    },
    {
      height: 800,
      width: 1200,
      productType: ProductType.PALLET,
      image: "../assets/PaletyObrazki/produktyRozmiary/800x1200/16.JPG"
    },
    {
      height: 800,
      width: 1200,
      productType: ProductType.PALLET_SOLID,
      image: "../assets/PaletyObrazki/produktyRozmiary/800x1200solid/21.JPG"
    },
    {
      height: 800,
      width: 1200,
      productType: ProductType.PALLET_SOLID,
      image: "../assets/PaletyObrazki/produktyRozmiary/800x1200solid/22.JPG"
    },
    {
      height: 800,
      width: 1200,
      productType: ProductType.PALLET_SOLID,
      image: "../assets/PaletyObrazki/produktyRozmiary/800x1200solid/23.JPG"
    },
    {
      height: 800,
      width: 1200,
      productType: ProductType.PALLET_SOLID,
      image: "../assets/PaletyObrazki/produktyRozmiary/800x1200solid/24.JPG"
    },
    {
      height: 800,
      width: 1200,
      productType: ProductType.PALLET_SOLID,
      image: "../assets/PaletyObrazki/produktyRozmiary/800x1200solid/24.JPG"
    },
    {
      height: 800,
      width: 1200,
      productType: ProductType.PALLET_SOLID,
      image: "../assets/PaletyObrazki/produktyRozmiary/800x1200solid/25.JPG"
    },
    {
      height: 800,
      width: 1200,
      productType: ProductType.PALLET_SOLID,
      image: "../assets/PaletyObrazki/produktyRozmiary/800x1200solid/26.JPG"
    },
    {
      height: 1200,
      width: 1000,
      productType: ProductType.PALLET,
      image: "../assets/PaletyObrazki/produktyRozmiary/1200x1000/6.JPG"
    },
    {
      height: 1200,
      width: 1000,
      productType: ProductType.PALLET,
      image: "../assets/PaletyObrazki/produktyRozmiary/1200x1000/7.JPG"
    },
    {
      height: 1200,
      width: 1000,
      productType: ProductType.PALLET,
      image: "../assets/PaletyObrazki/produktyRozmiary/1200x1000/19.JPG"
    },
    {
      height: 1200,
      width: 1000,
      productType: ProductType.PALLET,
      image: "../assets/PaletyObrazki/produktyRozmiary/1200x1000/20.JPG"
    },
    {
      height: 1200,
      width: 1000,
      productType: ProductType.PALLET_ENGLISH,
      image: "../assets/PaletyObrazki/produktyRozmiary/1200x1000paletaAngielska/36.JPG"
    },
    {
      height: 1200,
      width: 1000,
      productType: ProductType.PALLET_ENGLISH,
      image: "../assets/PaletyObrazki/produktyRozmiary/1200x1000paletaAngielska/37.JPG"
    },
    {
      height: 1200,
      width: 1000,
      productType: ProductType.PALLET_ENGLISH,
      image: "../assets/PaletyObrazki/produktyRozmiary/1200x1000paletaAngielska/38.JPG"
    },
    {
      height: 1200,
      width: 1000,
      productType: ProductType.PALLET_ENGLISH,
      image: "../assets/PaletyObrazki/produktyRozmiary/1200x1000paletaAngielska/39.JPG"
    },
    {
      height: 1200,
      width: 1000,
      productType: ProductType.PALLET_SKID,
      image: "../assets/PaletyObrazki/produktyRozmiary/1200x1000paletaPłozowa/17.1.jpg"
    },
    {
      height: 1200,
      width: 1000,
      productType: ProductType.PALLET_SKID,
      image: "../assets/PaletyObrazki/produktyRozmiary/1200x1000paletaPłozowa/17.jpg"
    },
    {
      height: 1200,
      width: 1000,
      productType: ProductType.PALLET_SKID,
      image: "../assets/PaletyObrazki/produktyRozmiary/1200x1000paletaPłozowa/18.jpg"
    },
    {
      height: 1600,
      width: 800,
      productType: ProductType.PALLET,
      image: "../assets/PaletyObrazki/produktyRozmiary/1600x800/27.JPG"
    },
    {
      height: 1600,
      width: 800,
      productType: ProductType.PALLET,
      image: "../assets/PaletyObrazki/produktyRozmiary/1600x800/28.JPG"
    },
    {
      height: 1600,
      width: 800,
      productType: ProductType.PALLET,
      image: "../assets/PaletyObrazki/produktyRozmiary/1600x800/29.JPG"
    },
    {
      height: 1600,
      width: 800,
      productType: ProductType.PALLET_SOLID,
      image: "../assets/PaletyObrazki/produktyRozmiary/1600x800solid/32.JPG"
    },
    {
      height: 1600,
      width: 800,
      productType: ProductType.PALLET_SOLID,
      image: "../assets/PaletyObrazki/produktyRozmiary/1600x800solid/33.JPG"
    },
    {
      height: 1600,
      width: 800,
      productType: ProductType.PALLET_SOLID,
      image: "../assets/PaletyObrazki/produktyRozmiary/1600x800solid/34.JPG"
    },
    {
      height: 1600,
      width: 800,
      productType: ProductType.PALLET_SOLID,
      image: "../assets/PaletyObrazki/produktyRozmiary/1600x800solid/35.JPG"
    },
    {
      height: 1600,
      width: 1200,
      productType: ProductType.PALLET,
      image: "../assets/PaletyObrazki/produktyRozmiary/1600x1200/30.JPG"
    },
    {
      height: 1600,
      width: 1200,
      productType: ProductType.PALLET,
      image: "../assets/PaletyObrazki/produktyRozmiary/1600x1200/31.JPG"
    },
    {
      height: 1800,
      width: 1200,
      productType: ProductType.PALLET,
      image: "../assets/PaletyObrazki/produktyRozmiary/1800x1200/1.JPG"
    },
    {
      height: 1800,
      width: 1200,
      productType: ProductType.PALLET,
      image: "../assets/PaletyObrazki/produktyRozmiary/1800x1200/2.JPG"
    },
    {
      height: 1800,
      width: 1200,
      productType: ProductType.PALLET,
      image: "../assets/PaletyObrazki/produktyRozmiary/1800x1200/3.JPG"
    },
    {
      height: 0,
      width: 0,
      productType: ProductType.ANGLEBAR,
      image: "../assets/PaletyObrazki/produktyRozmiary/kątownik/5.JPG"
    },
  ];
}

