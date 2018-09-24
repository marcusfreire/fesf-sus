import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastService } from '../../service/toast/toast.service';
import { Observable } from 'rxjs/Observable';
import { Cidade } from '../../models/cidade';
import { CidadeListService } from '../../service/cidade-list/cidade-list.service';
import { AngularFireDatabase } from 'angularfire2/database';

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

  userLogado = {} as User;
  user: User = {
    nome:'',
    cidade:'',
    email:'',
    coordenador: false,
  };
  cidadeCoord:string;
  err_texto:string = '';
  senha:string = '';
  cidadeLista$: Observable<Cidade[]>;

  constructor(private afAuth: AngularFireAuth, public navCtrl: NavController,
     public navParams: NavParams, private toast: ToastService, public listacidade: CidadeListService,
    private afDatebase: AngularFireDatabase) {
      this.cidadeLista$ = this.listacidade
      .getCidadeList()
      .snapshotChanges()
      .map (Changes => {
          return Changes.map(p => ({
          chave: p.payload.key, ...p.payload.val()}));
      })
  }

  ionViewWillLoad() {
    this.userLogado = this.navParams.get('User');
    this.user.cidade = this.userLogado.cidade; 
    console.log(`Cidade do coordenador: ${this.userLogado.cidade}`);
  }

  async registrar(user: User){
    try{
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email,this.senha).then(ref => {
        console.log(`Chave ${ref.uid}`);
        this.afDatebase.object(`perfil/${ref.uid}`).set(this.user);
        this.toast.show(`Adicionado ${user.email} com Sucesso!`);
        this.navCtrl.setRoot('AdmHomePage',{key: ref.key,User: this.userLogado})
      });
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
      else if(e.code === 'auth/email-already-in-use'){
        this.err_texto = "E-mail já está cadastrado";
        console.log("E-mail já está cadastrado");
      }
      else {
          this.err_texto = "Erro, por favor repita a operação";
          console.log("Erro");
      }
        console.error(e.code);
    }      
  }

}
