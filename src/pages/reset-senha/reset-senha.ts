import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the ResetSenhaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reset-senha',
  templateUrl: 'reset-senha.html',
})
export class ResetSenhaPage {
  email:string = '';
  texto:string = '';

  constructor(private afAuth: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  }

  async resetPassword(email: string) {
    try{
      const result = await this.afAuth.auth.sendPasswordResetEmail(email);
      console.log(result);
      this.texto = "E-mail enviado para redefinir sua senha!";
    }
    catch(e){
      if(e.code === 'auth/invalid-email'){
        this.texto = "O E-mail informado é inválido";
      }
      else if(e.code === 'auth/user-not-found'){
        this.texto = "E-mail não encontrado";
      }
      else {
        this.texto = "Erro, por favor repita a operação";
      }
      console.error(e);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetSenhaPage');
  }

}
