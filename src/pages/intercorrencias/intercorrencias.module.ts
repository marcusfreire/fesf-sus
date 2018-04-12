import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IntercorrenciasPage } from './intercorrencias';

@NgModule({
  declarations: [
    IntercorrenciasPage,
  ],
  imports: [
    IonicPageModule.forChild(IntercorrenciasPage),
  ],
})
export class IntercorrenciasPageModule {}
