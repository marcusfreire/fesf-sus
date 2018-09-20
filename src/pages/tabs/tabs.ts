import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Item } from '../../models/item/item.models';
import { ColetaListService } from '../../service/coleta-list/coleta-list.service';
import { ToastService } from '../../service/toast/toast.service';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  item: Item;

  tab1Root:string = "SocialPage";
  tab2Root:string = "PrePartoPage";
  tab3Root:string = "PartoPage";
  tab4Root:string = "IntercorrenciasPage";
  tab5Root:string = "BoasPraticasPage";
  tab6Root:string = "PuerperioPage";

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private coleta: ColetaListService, private toast:ToastService) {
  }
    
  ionViewWillLoad() {
    this.item = this.navParams.get('item');
    console.log(`Carregando ${this.item.cidade}`);
  }

  cancelar(){
    this.navCtrl.setRoot('HomeUserPage');
  }

  addItem(item: Item){
    this.coleta.addItem(item).then(ref => {
      console.log(`${item.data} na cidade de ${item.cidade} salva!`);
      this.toast.show(`${item.data} Adicionado em ${item.cidade}`);
      this.navCtrl.setRoot('HomeUserPage',{key: ref.key})
    });
  }
}
