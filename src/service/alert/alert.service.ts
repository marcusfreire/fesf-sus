import { Injectable } from "@angular/core";
import { AlertController } from "ionic-angular";



@Injectable()
export class AlertService{
    
    constructor( private alertCtrl: AlertController){}
    
    show(titulo:string, mensagem:string) {
        let alert = this.alertCtrl.create({
          title: titulo,
          subTitle: mensagem,
          buttons: ['ok']
        });
        alert.present();
      }
        
}