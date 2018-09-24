import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;
  err_texto:string = '';
  senha:string = '';
  perfil: AngularFireObject<User>;
  
  constructor(private afAuth: AngularFireAuth,private afDatabase: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
  }

  async login(user:User){
    try {
      const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email,this.senha);
      if (result){
        this.perfil = this.afDatabase.object(`perfil/${result.uid}`);
        this.perfil.valueChanges().subscribe(statususer => {
          if(statususer.coordenador){
            this.navCtrl.setRoot('AdmHomePage', {User:statususer});
          }else{
            this.navCtrl.setRoot('HomeUserDataPage',{User:statususer});
          }  
        })
      }
      console.log(`USER.uid = ${result.uid}`);
    } catch (error) {
    if (error.code === 'auth/wrong-password') {
        this.err_texto = "Senha Incorreta";
        console.log("Senha Incorreta");
    }
    else if(error.code === 'auth/user-not-found'){
       this.err_texto = "E-mail não encontrado";
       console.log("E-mail não encontrado");
    }else if(error.code === 'auth/invalid-email'){
      this.err_texto = "E-mail inválido";
      console.log("E-mail inválido");
    }else if(error.code === 'auth/argument-error'){
    this.err_texto = "E-mail ou Senha não digitada";
    console.log("Senha não digitada");
    }
      console.error(error);
    }
  }

  resetarSenha(){
    this.navCtrl.push('ResetSenhaPage');
  }

}
