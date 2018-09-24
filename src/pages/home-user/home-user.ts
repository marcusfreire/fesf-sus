import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Cidade } from '../../models/cidade';
import { CidadeListService } from '../../service/cidade-list/cidade-list.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../models/user';

/**
 * Generated class for the HomeUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-user',
  templateUrl: 'home-user.html',
})
export class HomeUserPage {

  cidade: string = '';
  user = {} as User;
  
  cidadeLista$: Observable<Cidade[]>;

  constructor(private afAuth: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams,
    public listacidade: CidadeListService) {
      this.user = this.navParams.get('User');
      console.log(`HomeUser ${this.user.cidade}`);
      this.cidadeLista$ = this.listacidade
      .getCidadeList()
      .snapshotChanges()
      .map (Changes => {
          return Changes.map(p => ({
          chave: p.payload.key, ...p.payload.val()}));
      })
  }

  sair(){
    this.afAuth.auth.signOut().then(() => {
      this.navCtrl.setRoot('LoginPage');
    });
  }

}
