import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { HomeComponent } from './modules/home/home.component';
import { ContactComponent } from './modules/contact/contact.component';
import { FirmComponent } from './modules/firm/firm.component';
import { GalleryComponent } from './modules/gallery/gallery.component';
import { LocalizationComponent } from './modules/localization/localization.component';
import { WorkComponent } from './modules/work/work.component';
import { ProductComponent } from './modules/product/product.component';

const routes: Routes = [
  {
    path:'', component: DefaultComponent, children:[
      {path:'', component: HomeComponent},
      {path:'firm', component:FirmComponent},
      {path:'gallery', component:GalleryComponent},
      {path:'work', component:WorkComponent},
      {path:'localization', component:LocalizationComponent},
      {path:'contact', component:ContactComponent},
      {path:'product', component:ProductComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
