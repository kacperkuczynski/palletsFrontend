import { Component, OnInit } from '@angular/core';
import { Gallery, GalleryItem, ImageSize, ThumbnailsPosition } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';
import { Product } from '../product/model/product';
import { PalletteType } from '../product/model/palletteType';
import { ProductType } from '../product/model/productType';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  products!: Product[];
  items!: GalleryItem[];
  imageData = data;

  constructor(public gallery: Gallery, public lightbox: Lightbox) {}

  ngOnInit() {
    this.products = this.data.map(item => item);

    // Get a lightbox gallery ref
    const lightboxRef = this.gallery.ref('lightbox');

    // Add custom gallery config to the lightbox (optional)
    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top
    });

    // Load items into the lightbox gallery ref
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
      height: 1000,
      width: 1000,
      palletteType: PalletteType.DREWNIANA,
      productType: ProductType.KĄTOWNIK,
      image: "../assets/PaletyObrazki/produkty/5.JPG"
    },
    {
      height: 1200,
      width: 1000,
      palletteType: PalletteType.DREWNIANA,
      productType: ProductType.PALETA,
      image: "../assets/PaletyObrazki/produkty/15.JPG"
    }
  ];
}
const data = [
  {
    srcUrl: "../assets/PaletyObrazki/galeria/1.JPG"
  },
  {
    srcUrl: "../assets/PaletyObrazki/galeria/2.JPG"
  },
  {
    srcUrl: "../assets/PaletyObrazki/galeria/3.JPG"
  }
];