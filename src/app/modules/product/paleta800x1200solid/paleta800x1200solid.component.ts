import { Component, OnInit } from '@angular/core';
import { GalleryItem, Gallery, ImageSize, ThumbnailsPosition } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';
import { Product } from '../model/product';
import { ProductType } from '../model/productType';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-paleta800x1200solid',
  templateUrl: './paleta800x1200solid.component.html',
  styleUrls: ['./paleta800x1200solid.component.scss']
})
export class Paleta800x1200solidComponent implements OnInit{

  palletSolid_800x1200!: Product[];

  items!: GalleryItem[];

  constructor(
    private gallery: Gallery, 
    private lightbox: Lightbox,
    private productService:ProductService
    ) {}


  ngOnInit(): void {
    this.palletSolid_800x1200 = this.productService.data.filter(item => item.height === 800 && item.width === 1200 && item.productType === ProductType.PALLET_SOLID);
    
    const lightboxRef = this.gallery.ref('lightbox');

    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top
    });

    lightboxRef.load(this.items); 
  }

}
