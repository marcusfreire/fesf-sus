import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cidade } from '../../models/cidade';
import { CidadeListService } from '../../service/cidade-list/cidade-list.service';
import { ToastService } from '../../service/toast/toast.service';

/**
 * Generated class for the AdmEditCidadePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adm-edit-cidade',
  templateUrl: 'adm-edit-cidade.html',
})
export class AdmEditCidadePage {
  cidade: Cidade;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public listacidade: CidadeListService, private toast: ToastService) {
  }

  ionViewWillLoad() {
    this.cidade = this.navParams.get('cidade');
    console.log(this.cidade);
  }

  editCidade(cidade: Cidade ){
    this.listacidade.editCidade(cidade).then(()=> {
      this.navCtrl.pop();
      this.toast.show(`${cidade.nome} Atualizado!`);
    });
  }

}
