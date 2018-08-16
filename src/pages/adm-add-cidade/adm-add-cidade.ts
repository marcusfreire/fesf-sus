import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cidade } from '../../models/cidade';
import { CidadeListService } from '../../service/cidade-list/cidade-list.service';
import { ToastService } from '../../service/toast/toast.service';

/**
 * Generated class for the AdmAddCidadePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adm-add-cidade',
  templateUrl: 'adm-add-cidade.html',
})
export class AdmAddCidadePage {

  cidade: Cidade = {
    nome:'',
    latitude:0,
    longitude:0,
  };

  constructor(public navCtrl: NavController,
    public navParams: NavParams,public listacidade: CidadeListService, private toast: ToastService) {
  }

  addCidade(cidade: Cidade){
    this.listacidade.addCidade(cidade).then(ref => {
      console.log(ref.key);
      this.toast.show(`Salvando ${cidade.nome}`);
      this.navCtrl.setRoot('AdmHomePage',{key: ref.key})
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdmAddCidadePage');
  }

}
