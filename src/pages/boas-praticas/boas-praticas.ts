import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Item } from '../../models/item/item.models';
import { AlertService } from '../../service/alert/alert.service';

@IonicPage()
@Component({
  selector: 'page-boas-praticas',
  templateUrl: 'boas-praticas.html',
})
export class BoasPraticasPage {
  item: Item;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alert: AlertService) { 

  }

  A51() {
    this.alert.show('A51','Número de parturientes com acompanhante.');
  }
  A52() {
    this.alert.show('A52','Número de parturientes com Doula, acompanhantes de parto profissionais.');
  }
  A53() {
    this.alert.show('A53','Número de parturientes na posição de parir não supina.');
  }
  A54() {
    this.alert.show('A54','Número de cortes tardios do cordão.');
  }
  A55() {
    this.alert.show('A55','Número de cortes do cordão realizados pelo acompanhante ou pela própria parturiente.');
  }
  A56() {
    this.alert.show('A56','Registro de Apagar no 1º e 5º minuto.');
  }
  A57() {
    this.alert.show('A57','Contato pele a pele na sala de parto.');
  }
  A58() {
    this.alert.show('A58','Número de parturientes que amamentaram em sala de parto.');
  }

  ionViewWillLoad() {
    this.item = this.navParams.get('item');
    console.log(this.item.A51);
  }
}
