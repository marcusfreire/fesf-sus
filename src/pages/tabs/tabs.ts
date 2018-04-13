import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root:string = "SocialPage";
  tab2Root:string = "PrePartoPage";
  tab3Root:string = "PartoPage";
  tab4Root:string = "IntercorrenciasPage";
  tab5Root:string = "BoasPraticasPage";
  tab6Root:string = "PuerperioPage";

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  addItem(){
      this.navCtrl.setRoot('HomePage');
  }
}
