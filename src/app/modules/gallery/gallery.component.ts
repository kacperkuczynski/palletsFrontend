import { Component, OnInit } from '@angular/core';
import { Gallery, GalleryItem, ImageItem, ImageSize, ThumbnailsPosition } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';
import { GalleryService } from './gallery.service';
import { Gallery as GalleryModel  } from './model/gallery';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: [ './gallery.component.scss']
})
export class GalleryComponent implements OnInit{
  items: GalleryItem[] = [];

  constructor(
    private gallery: Gallery,
    private lightbox: Lightbox,
    private galleryService: GalleryService
  ) {}

  ngOnInit() {
    this.galleryService.getGallery().subscribe(data => {
      this.items = data.map(img => new ImageItem({ src: `http://localhost:8080${img}`}));
    });

    const lightboxRef = this.gallery.ref('lightbox');

    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top
    });
  }
}
// const data = [
//   {
//     srcUrl: "../assets/PaletyObrazki/galeria/1.JPG"
//   },
//   {
//     srcUrl: "../assets/PaletyObrazki/galeria/2.JPG"
//   },
//   {
//     srcUrl: "../assets/PaletyObrazki/galeria/3.JPG"
//   },
//   {
//     srcUrl: "../assets/PaletyObrazki/galeria/4.JPG"
//   },
//   {
//     srcUrl: "../assets/PaletyObrazki/galeria/5.JPG"
//   },
//   {
//     srcUrl: "../assets/PaletyObrazki/galeria/6.JPG"
//   },
//   {
//     srcUrl: "../assets/PaletyObrazki/galeria/8.JPG"
//   },
//   {
//     srcUrl: "../assets/PaletyObrazki/galeria/10.JPG"
//   },
//   {
//     srcUrl: "../assets/PaletyObrazki/galeria/12.JPG"
//   },
//   {
//     srcUrl: "../assets/PaletyObrazki/galeria/13.JPG"
//   },
//   {
//     srcUrl: "../assets/PaletyObrazki/galeria/14.JPG"
//   },
//   {
//     srcUrl: "../assets/PaletyObrazki/galeria/15.JPG"
//   },
//   {
//     srcUrl: "../assets/PaletyObrazki/galeria/16.JPG"
//   },
//   {
//     srcUrl: "../assets/PaletyObrazki/galeria/17.JPG"
//   },
//   {
//     srcUrl: "../assets/PaletyObrazki/galeria/18.JPG"
//   },
//   {
//     srcUrl: "../assets/PaletyObrazki/galeria/19.JPG"
//   },
//   {
//     srcUrl: "../assets/PaletyObrazki/galeria/20.JPG"
//   },
//   {
//     srcUrl: "../assets/PaletyObrazki/galeria/21.JPG"
//   },
//   {
//     srcUrl: "../assets/PaletyObrazki/galeria/22.JPG"
//   },
//   {
//     srcUrl: "../assets/PaletyObrazki/galeria/23.JPG"
//   }
// ];
