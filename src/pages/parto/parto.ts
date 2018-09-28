import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item/item.models';
import { AlertService } from '../../service/alert/alert.service';

@IonicPage()
@Component({
  selector: 'page-parto',
  templateUrl: 'parto.html',
})
export class PartoPage {
  item: Item;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alert: AlertService) {
  }

  A31() {
    this.alert.show('A31','Número de partos realizados nos HPP\'s.');
  }
  A32() {
    this.alert.show('A32','Número de partos naturais realizados pelo(a) enfermeiro(a) obstetra no período.');
  }
  A33() {
    this.alert.show('A33','Número de partos ocorridos no HPP, no mês, de residentes em outros municípios.');
  }
  A34() {
    this.alert.show('A34','Número de partos naturais realizados e registrados em AIH (Autorização de Internação Hospitalar) pelo(a) enfermeiro(a) obstetra no período.');
  }
  A35() {
    this.alert.show('A35','Número de gestantes encaminhadas com previsão de risco no parto.');
  }
  A36() {
    this.alert.show('A36','Número de natimortos em partos realizados pelo(a) enfermeiro(a) obstetra nos HPP\'s no período.'); 
  }

  ionViewWillLoad() {
    this.item = this.navParams.get('item');
  }
}
