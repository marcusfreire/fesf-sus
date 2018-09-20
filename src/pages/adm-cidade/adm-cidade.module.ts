import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdmCidadePage } from './adm-cidade';

@NgModule({
  declarations: [
    AdmCidadePage,
  ],
  imports: [
    IonicPageModule.forChild(AdmCidadePage),
  ],
})
export class AdmCidadePageModule {}
