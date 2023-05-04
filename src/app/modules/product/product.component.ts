import { Component, OnInit } from '@angular/core';
import { Gallery, GalleryItem, ImageSize, ThumbnailsPosition } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';
import { Product } from './model/product';
import { ProductType } from './model/productType';
import { ProductService } from './product.service';
import { SidebarCategory } from './model/sidebarCategory';

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

  pallet!: Product[];
  categories: Array<SidebarCategory> = [];

  

  items!: GalleryItem[];

  constructor(
    private gallery: Gallery, 
    private productService:ProductService
    ) {}

  ngOnInit() {
    // this.pallet_800x600 = this.productService.data.filter(item => item.height === 800 && item.width === 600);
    // this.pallet_800x1200 = this.productService.data.filter(item => item.height === 800 && item.width === 1200);
    // this.pallet_1200x1000 = this.productService.data.filter(item => item.height === 1200 && item.width === 1000);
    // this.palletSolid_1600x800 = this.productService.data.filter(item => item.height === 1600 && item.width === 800 && item.productType === ProductType.PALLET_SOLID);
    // this.palletEnglish_1200x1000 = this.productService.data.filter(item => item.height === 1200 && item.width === 1000 && item.productType === ProductType.PALLET_ENGLISH);
    // this.palletSkid_1200x1000 = this.productService.data.filter(item => item.height === 1200 && item.width === 1000 && item.productType === ProductType.PALLET_SKID);
    // this.pallet_1600x800 = this.productService.data.filter(item => item.height === 1600 && item.width === 800);
    // this.pallet_1600x1200 = this.productService.data.filter(item => item.height === 1600 && item.width === 1200);
    // this.pallet_1800x1200 = this.productService.data.filter(item => item.height === 1800 && item.width === 1200);
    // this.angleBar = this.productService.data.filter(item => item.productType === ProductType.ANGLEBAR);

    this.getSidebarCategories();
        

    // this.palety = this.productService.data;

    const lightboxRef = this.gallery.ref('lightbox');

    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top
    });

    lightboxRef.load(this.items); 
  }
  getSidebarCategories() {
    this.categories = this.productService.sidebarCategory;
  }
  getCategory(category:string){
    console.log(category);
  }
}

