import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item/item.models';
import { ColetaListService } from '../../service/coleta-list/coleta-list.service';
import { ToastService } from '../../service/toast/toast.service';

/**
 * Generated class for the TabsValidarPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs-validar',
  templateUrl: 'tabs-validar.html'
})
export class TabsValidarPage {
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
    this.item.user = this.navParams.get('email');
    console.log(`Carregando ${this.item.user}`);
  }

  validar(){
    if(this.item.validar){
      this.item.validar = false;
    }else{
      this.item.validar = true;
    }
  }

  cancelar(){
    this.navCtrl.pop();
  }

  editItem(item: Item){
    this.coleta.editItem(item).then(ref => {
      console.log(`${item.data} na cidade de ${item.cidade} salva!`);
      this.toast.show(`${item.data}, Atualizado em ${item.cidade}`);
      this.navCtrl.pop();
    });
  }
}
