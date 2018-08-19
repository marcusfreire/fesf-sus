import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsEditPage } from './tabs-edit';

@NgModule({
  declarations: [
    TabsEditPage,
  ],
  imports: [
    IonicPageModule.forChild(TabsEditPage),
  ]
})
export class TabsEditPageModule {}
