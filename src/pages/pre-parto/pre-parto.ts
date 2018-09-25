import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Item } from '../../models/item/item.models';
import { AlertService } from '../../service/alert/alert.service';

@IonicPage()
@Component({
  selector: 'page-pre-parto',
  templateUrl: 'pre-parto.html',
})
export class PrePartoPage {
  item: Item;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alert: AlertService) {
  }

  A21() {
    this.alert.show('A21','Número de gestantes com data provável do parto para o período atual.');
  }
  A22() {
    this.alert.show('A22','Número de consultas de pré-natal realizadas a partir da 36º semana pelo(a) enfermeiro(a) obstetra.');
  }
  A23() {
    this.alert.show('A23','Número de gestantes que visitaram HPP\'s no período.');
  }
  A24() {
    this.alert.show('A24','Número de gestantes assistidas no pré-natal com previsão de risco no parto.');
  }
  A25() {
    this.alert.show('A25','Número de atividades na sala de espera realizadas no período.');
  }
  A26() {
    this.alert.show('A26','Número de atividades de roda de conversa com mulheres (gestantes, nutrizes com acompanhante).');
  }
  A27() {
    this.alert.show('A27','Número de reuniões realizadas com a Atenção Básica para planejamento das ações no território.');
  }
  A28() {
    this.alert.show('A28','Número de oficinas de Educação Permanente realizadas no período.');
  }


  ionViewWillLoad() {
    this.item = this.navParams.get('item');
  }
}
