import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdmAddCidadePage } from './adm-add-cidade';

@NgModule({
  declarations: [
    AdmAddCidadePage,
  ],
  imports: [
    IonicPageModule.forChild(AdmAddCidadePage),
  ],
})
export class AdmAddCidadePageModule {}
