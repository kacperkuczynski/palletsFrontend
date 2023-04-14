import { Component, OnInit } from '@angular/core';
import { Gallery, GalleryItem, ImageItem, ImageSize, ThumbnailsPosition } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: [ './gallery.component.scss']
})
export class GalleryComponent implements OnInit{
  
  items!: GalleryItem[];
  imageData = data;

  constructor(public gallery: Gallery, public lightbox: Lightbox) {}

  ngOnInit() {

    /** Basic Gallery Example */

    // Creat gallery items
    this.items = this.imageData.map(item => new ImageItem({src: item.srcUrl, thumb: item.srcUrl }));

    /** Lightbox Example */

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
  },
  {
    srcUrl: "../assets/PaletyObrazki/galeria/4.JPG"
  },
  {
    srcUrl: "../assets/PaletyObrazki/galeria/5.JPG"
  },
  {
    srcUrl: "../assets/PaletyObrazki/galeria/6.JPG"
  },
  {
    srcUrl: "../assets/PaletyObrazki/galeria/7.JPG"
  },
  {
    srcUrl: "../assets/PaletyObrazki/galeria/8.JPG"
  },
  {
    srcUrl: "../assets/PaletyObrazki/galeria/9.JPG"
  },
  {
    srcUrl: "../assets/PaletyObrazki/galeria/10.JPG"
  },
  {
    srcUrl: "../assets/PaletyObrazki/galeria/11.JPG"
  },
  {
    srcUrl: "../assets/PaletyObrazki/galeria/12.JPG"
  },
  {
    srcUrl: "../assets/PaletyObrazki/galeria/13.JPG"
  },
  {
    srcUrl: "../assets/PaletyObrazki/galeria/14.JPG"
  },
  {
    srcUrl: "../assets/PaletyObrazki/galeria/15.JPG"
  },
  {
    srcUrl: "../assets/PaletyObrazki/galeria/16.JPG"
  },
  {
    srcUrl: "../assets/PaletyObrazki/galeria/17.JPG"
  }
];
