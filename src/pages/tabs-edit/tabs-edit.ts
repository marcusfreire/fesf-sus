import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { Item } from '../../models/item/item.models';
import { ColetaListService } from '../../service/coleta-list/coleta-list.service';
import { ToastService } from '../../service/toast/toast.service';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the TabsEditPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs-edit',
  templateUrl: 'tabs-edit.html'
})
export class TabsEditPage {
  item: Item;

  tab1Root:string = "SocialPage";
  tab2Root:string = "PrePartoPage";
  tab3Root:string = "PartoPage";
  tab4Root:string = "IntercorrenciasPage";
  tab5Root:string = "BoasPraticasPage";
  tab6Root:string = "PuerperioPage";

  constructor(private afAuth: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams, 
    private coleta: ColetaListService, private toast:ToastService,private toast2: ToastController) {
  }
    
  ionViewWillLoad() {
    this.item = this.navParams.get('item');
    console.log(`Carregando ${this.item.cidade}`);
    this.afAuth.authState.subscribe(data =>{
      if (data && data.email && data.uid){
        this.item.user = data.email;         
      }else{
        this.toast2.create({
          message: `Não encontou este usuário`,
          duration:3000
        }).present();
        this.navCtrl.setRoot('LoginPage');           
      }
    })
  }

  cancelar(){
    this.navCtrl.setRoot('HomeUserPage');
  }

  editItem(item: Item){
    this.coleta.editItem(item).then(ref => {
      console.log(`${item.data} na cidade de ${item.cidade} salva!`);
      this.toast.show(`${item.data}, Atualizado em ${item.cidade}`);
      this.navCtrl.setRoot('HomeUserPage');
    });
  }
}
