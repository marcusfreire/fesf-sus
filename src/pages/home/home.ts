import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams, ToastController } from 'ionic-angular';

import { Item } from '../../models/item/item.models';
import { ColetaListService } from '../../service/coleta-list/coleta-list.service';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  item: Item = {
    cidade:'',
    data:'',
    user:'',
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

    coletaLista$: Observable<Item[]>;
    
    cor:boolean = false;

    constructor(private afAuth: AngularFireAuth, public navCtrl: NavController, 
      public navParams: NavParams, public coleta: ColetaListService, private toast: ToastController) {
        this.coletaLista$ = coleta
          .getColetaList()
          .snapshotChanges()
          .map(changes => {
            return changes.map(c => ({
              key: c.payload.key,
              ...c.payload.val(),
            }));
          });
       }
 
    botao(){
      if((this.item.data!='') && (this.item.cidade!='')){
        console.log(`${this.cor} data: ${this.item.data} cidade: ${this.item.cidade}`);
        this.cor=true;
      }
    } 
       
    verificaCidade(cidade:string, data:string){ 
      this.coletaLista$.forEach(function(i){
      //for(let i of this.coletaLista$){
        console.log(`Teste i obj  ${i}`);
        i.forEach(function(x){
          //console.log(`Teste x obj ${x.cidade}, data ${x.data} `);
          if((x.cidade == cidade) && (x.data== data)){
            console.log(`Cidade: ${cidade}, na data: ${data}, JÁ Cadastrado!`);
          }else{
            console.log(`Cidade: ${cidade}, na data: ${data}, Não Está cadastrado!`);
          }
        }); 
      });        
    }

    sair(){
      this.afAuth.auth.signOut().then(() => {
        this.navCtrl.setRoot('LoginPage');
      });
    }

    ionViewWillLoad(){
      this.afAuth.authState.subscribe(data =>{
        if (data && data.email && data.uid){
          this.toast.create({
            message: `Bem vindo ${data.email}`,
            duration:3000
          }).present();          
        }else{
          this.toast.create({
            message: `Não encontou este usuário`,
            duration:3000
          }).present();           
        }
      })

    }
}
