import { Component, OnInit } from '@angular/core';
import { Product } from './model/product';
import { PalletteType } from './model/palletteType';
import { ProductType } from './model/productType';
import { Gallery, GalleryItem, ImageSize, ThumbnailsPosition } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{

  items800!: Product[];
  items1000!: Product[];
  items!: GalleryItem[];

  constructor(public gallery: Gallery, public lightbox: Lightbox) {}

  ngOnInit() {
    this.items1000 = this.data.filter(item => item.height === 1000);
    this.items800 = this.data.filter(item => item.height === 800);

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
      width: 1000,
      palletteType: PalletteType.DREWNIANA,
      productType: ProductType.PALETA,
      image: "../assets/PaletyObrazki/produkty/1.JPG"
    },
    {
      height: 800,
      width: 1000,
      palletteType: PalletteType.DREWNIANA,
      productType: ProductType.PALETA,
      image: "../assets/PaletyObrazki/produkty/1.JPG"
    },
    {
      height: 800,
      width: 1000,
      palletteType: PalletteType.DREWNIANA,
      productType: ProductType.PALETA,
      image: "../assets/PaletyObrazki/produkty/1.JPG"
    },
    {
      height: 1000,
      width: 1000,
      palletteType: PalletteType.DREWNIANA,
      productType: ProductType.PALETA,
      image: "../assets/PaletyObrazki/produkty/5.JPG"
    },
    {
      height: 1000,
      width: 1000,
      palletteType: PalletteType.DREWNIANA,
      productType: ProductType.PALETA,
      image: "../assets/PaletyObrazki/produkty/5.JPG"
    },
    {
      height: 1000,
      width: 1000,
      palletteType: PalletteType.DREWNIANA,
      productType: ProductType.PALETA,
      image: "../assets/PaletyObrazki/produkty/5.JPG"
    }
  ];
}

