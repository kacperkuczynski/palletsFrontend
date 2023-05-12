import { Component, OnInit } from '@angular/core';
import { Gallery, GalleryItem, ImageSize, ThumbnailsPosition } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';
import { Product } from '../product/model/product';
import { ProductType } from '../product/model/productType';
import { Category } from '../product/model/category';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  localesList = [
    { code: 'pl-PL', label: 'Polski' },
    { code: 'de', label: 'Deutsch' }
  ];

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
      width: 1200,
      productType: ProductType.PALLET_SOLID,
      category: 'PALETA 1200x800',
      image: "../assets/PaletyObrazki/produktyRozmiary/800x1200solid/25.JPG"
    },
    {
      height: 1200,
      width: 1000,
      productType: ProductType.PALLET,
      category:'PALETA 1200x800',
      image: "../assets/PaletyObrazki/produktyRozmiary/1200x1000/19.JPG"
    },
    {
      height: 1200,
      width: 1000,
      productType: ProductType.PALLET_SOLID,
      category:'PALETA 1200x800 SOLID',
      image: "../assets/PaletyObrazki/produktyRozmiary/1600x800solid/32.JPG"
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