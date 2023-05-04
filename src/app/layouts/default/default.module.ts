import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { DefaultComponent } from './default.component';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { RouterModule } from '@angular/router';
import { ContactComponent } from 'src/app/modules/contact/contact.component';
import { FirmComponent } from 'src/app/modules/firm/firm.component';
import { GalleryComponent } from 'src/app/modules/gallery/gallery.component';
import { LocalizationComponent } from 'src/app/modules/localization/localization.component';
import { ProductComponent } from 'src/app/modules/product/product.component';
import { WorkComponent } from 'src/app/modules/work/work.component';
import { GalleryModule } from  'ng-gallery';
import { LightboxModule } from  'ng-gallery/lightbox';
import { ReactiveFormsModule } from '@angular/forms';
import { Paleta800x1200solidComponent } from 'src/app/modules/product/paleta800x1200solid/paleta800x1200solid.component';

@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    FirmComponent,
    ProductComponent,
    GalleryComponent,
    WorkComponent,
    LocalizationComponent,
    ContactComponent
    ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    GalleryModule.withConfig({
      // thumbView: 'contain',
    }),
    LightboxModule,
    ReactiveFormsModule
  ]
})
export class DefaultModule { }
