import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeUserDataPage } from './home-user-data';

@NgModule({
  declarations: [
    HomeUserDataPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeUserDataPage),
  ],
})
export class HomeUserDataPageModule {}
