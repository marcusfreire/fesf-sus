import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../models/user';

/**
 * Generated class for the AdmHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adm-home',
  templateUrl: 'adm-home.html',
})
export class AdmHomePage {
  user = {} as User;

  constructor(private afAuth: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
    this.user = this.navParams.get('User');
    console.log(`ionViewDidLoad AdmHomePage ${this.user.cidade}`);
  }
  sair(){
    this.afAuth.auth.signOut().then(() => {
      this.navCtrl.setRoot('LoginPage');
    });
  }

}
