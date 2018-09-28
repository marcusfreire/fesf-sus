import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { Observable } from 'rxjs/Observable';
import { Item } from '../../models/item/item.models';
import { ColetaListService } from '../../service/coleta-list/coleta-list.service';
import { ToastService } from '../../service/toast/toast.service';

/**
 * Generated class for the AdmValidarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adm-validar',
  templateUrl: 'adm-validar.html',
})
export class AdmValidarPage {
  item: Item = {
    comentario:'',
    validar:false,
    cidade:'',
    user:'',
    data:'',
    A11:0,
    A12:0,
    A13:0,
    A14:0,
    A15:0,
    A16:0,
    A21:0,
    A22:0,
    A23:0,
    A24:0,
    A25:0,
    A26:0,
    A27:0,
    A31:0,
    A32:0,
    A33:0,
    A34:0,
    A35:0,
    A41:0,
    A42:0,
    A51:0,
    A52:0,
    A53:0,
    A54:0,
    A55:0,
    A56:0,
    A57:0,
    A58:0,
    A61:0,
    A62:0,
    A63:0,
    };

  user = {} as User;

  coletaLista$: Observable<Item[]>;
  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, public coleta: ColetaListService, private toastService: ToastService) {
  }

  ionViewWillLoad() {
    this.user = this.navParams.get('User');
    this.item.cidade = this.user.cidade;
    console.log(`Coordenador validar ${this.user.cidade}`);
    this.coletaLista$ = this.coleta.busca(this.user.cidade);
  }

  removeItem(item: Item ){
    this.coleta.removeItem(item).then(()=> {
      this.toastService.show(` ${item.data} ,${item.cidade} Excluido!`);
    });
  }

}