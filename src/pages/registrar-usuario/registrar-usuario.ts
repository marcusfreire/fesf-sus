import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the RegistrarUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registrar-usuario',
  templateUrl: 'registrar-usuario.html',
})
export class RegistrarUsuarioPage {
  
  user = {} as User;
  err_texto:string = '';

  constructor(private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  async registrar(user: User){
    try{
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email,user.senha);
      console.log(result);
    }
    catch(e){
      //Erro não utilizado, quando está tudo vazio
      // auth/argument-error
    if (e.code === 'auth/weak-password') {
        this.err_texto = "Senha: Conter no mínimo 6 caracteres";
        console.log("A senha deve conter no mínimo 6 caracteres");
    }
    else if(e.code === 'auth/invalid-email'){
       this.err_texto = "O email informado é invalido";
       console.log("O email informado é invalido");
    }
    else if(e.code === 'auth/argument-error'){
      this.err_texto = "E-mail ou Senha não digitada";
      console.log("E-mail ou Senha não digitada");
    }
    else {
        this.err_texto = "Erro, por favor repita a operação";
        console.log("Erro");
    }
      console.error(e);
    }
      
  }

}
