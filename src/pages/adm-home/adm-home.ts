import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

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

  constructor(private afAuth: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  }
  sair(){
    this.afAuth.auth.signOut().then(() => {
      this.navCtrl.setRoot('LoginPage');
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AdmHomePage');
  }

}
