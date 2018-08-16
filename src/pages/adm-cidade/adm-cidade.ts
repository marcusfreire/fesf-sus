import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cidade } from '../../models/cidade';
import { Observable } from 'rxjs/Observable';
import { CidadeListService } from '../../service/cidade-list/cidade-list.service';
import { ToastService } from '../../service/toast/toast.service';

/**
 * Generated class for the AdmCidadePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adm-cidade',
  templateUrl: 'adm-cidade.html',
})
export class AdmCidadePage {
  cidade: Cidade = {
    nome:'',
    latitude:0,
    longitude:0,
  };
  
  cidadeLista$: Observable<Cidade[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public listacidade: CidadeListService , private toast:ToastService) {
      this.cidadeLista$ = this.listacidade
          .getCidadeList()
          .snapshotChanges()
          .map(changes => {
            return changes.map(c => ({
              key: c.payload.key,
              ...c.payload.val(),
            }));
          });
  }

  removeItem(cidade: Cidade ){
    this.listacidade.removeCidade(cidade).then(()=> {
      this.navCtrl.setRoot('AdmHomePage');
      this.toast.show(` ${cidade.nome} Excluido!`);
    });
  }

}
