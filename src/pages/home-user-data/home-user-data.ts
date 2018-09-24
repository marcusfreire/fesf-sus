import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';

import { ColetaListService } from '../../service/coleta-list/coleta-list.service';
import { Observable } from 'rxjs/Observable';
import { Item } from '../../models/item/item.models';
import { ToastService } from '../../service/toast/toast.service';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the HomeUserDataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-user-data',
  templateUrl: 'home-user-data.html',
})
export class HomeUserDataPage {
  item: Item = {
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
    A28:0,
    A31:0,
    A32:0,
    A33:0,
    A34:0,
    A35:0,
    A36:0,
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
    A64:0,
    A65:0,
    };

  user = {} as User;

  flag = false;

  err_texto:string = '';

  coletaLista$: Observable<Item[]>;

  constructor(private afAuth: AngularFireAuth,public navCtrl: NavController, 
    public navParams: NavParams, public coleta: ColetaListService, private toastService: ToastService) {
  }

  ionViewWillLoad() {
    this.user = this.navParams.get('User');
    this.item.cidade = this.user.cidade;
    console.log(`HomeUser ${this.user.cidade}`);
    this.coletaLista$ = this.coleta.busca(this.user.cidade);
  }
  
  verificaCidade(data:string){
    this.flag = this.coleta.busca2(this.user.cidade,data);
    if(this.item.data==''){
      this.err_texto = "Campo Data vazio";
    }
    if(this.flag){
      this.err_texto = "Essa data já foi adicionada, edite abaixo";
    }
    else{if(this.item.data!='')
      this.item.user = this.user.email;
      this.navCtrl.push("TabsPage",{item: this.item});
    }
  }

  removeItem(item: Item ){
    this.coleta.removeItem(item).then(()=> {
      this.toastService.show(` ${item.data} ,${item.cidade} Excluido!`);
    });
  }

  sair(){
    this.afAuth.auth.signOut().then(() => {
      this.navCtrl.setRoot('LoginPage');
    });
  }

}
