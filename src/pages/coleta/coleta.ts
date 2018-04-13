import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item/item.models';
import { ColetaListService } from '../../service/coleta-list/coleta-list.service';
import { ToastService } from '../../service/toast/toast.service';

/**
 * Generated class for the ColetaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-coleta',
  templateUrl: 'coleta.html',
})
export class ColetaPage {
  item: Item;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private coleta: ColetaListService, private toast:ToastService) {
  }
    
  ionViewWillLoad() {
    this.item = this.navParams.get('item');
    console.log(this.item.A11);
  }

  addItem(item: Item){
    this.coleta.addItem(item).then(ref => {
      console.log(`${item.data} na cidade de ${item.cidade} salva!`);
      this.toast.show(`${item.data} Adicionado em ${item.cidade}`);
      this.navCtrl.setRoot('HomePage',{key: ref.key})
    });
  } 
  
}
