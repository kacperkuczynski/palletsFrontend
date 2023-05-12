import { Component, OnInit } from '@angular/core';
import { Gallery, GalleryItem, ImageItem, ImageSize, ThumbnailsPosition } from 'ng-gallery';
import { Product } from './model/product';
import { ProductService } from './product.service';
import { Category } from './model/category';
import { ActivatedRoute, Params } from '@angular/router';
import { Lightbox } from 'ng-gallery/lightbox';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{

  products!: Product[];
  categories!: Category[];
  category!:'';

  items!: GalleryItem[];

  constructor(
    private gallery: Gallery, 
    private productService:ProductService,
    private route: ActivatedRoute,
    public lightbox: Lightbox
    ) {}

  ngOnInit() {
    this.categories = this.productService.category;
    this.productService.getProductsByCategory('800x600').subscribe(p => this.products = p);

    const lightboxRef = this.gallery.ref('lightbox');

    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top
    });

    lightboxRef.load(this.items);  
  }

  getCategory(category:string){
    this.productService.getProductsByCategory(category)
    .subscribe(products => this.products = products);
    this.showTitle(category);
  }
  showTitle(category:string){

  }

}

