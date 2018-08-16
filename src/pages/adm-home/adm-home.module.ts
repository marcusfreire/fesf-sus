import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdmHomePage } from './adm-home';

@NgModule({
  declarations: [
    AdmHomePage,
  ],
  imports: [
    IonicPageModule.forChild(AdmHomePage),
  ],
})
export class AdmHomePageModule {}
