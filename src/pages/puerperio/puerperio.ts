import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Item } from '../../models/item/item.models';
import { AlertService } from '../../service/alert/alert.service';

@IonicPage()
@Component({
  selector: 'page-puerperio',
  templateUrl: 'puerperio.html',
})
export class PuerperioPage {
  item: Item;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alert: AlertService) {
  }

  A61() {
    this.alert.show('A61','Número de consultas com puerpéras realizadas no mês, conforme necessidade identificada pelo(a) enfermeiro(a) obstetra.');
  }
  A62() {
    this.alert.show('A62','Número de consultas de recém-nascidos realizadas no mês, conforme necessidade identificada pelo(a) enfermeiro(a) obstetra.');
  }
  A63() {
    this.alert.show('A63','Número de consultas realizadas com recém-nascidos que demandaram encaminhamento com pediatra.');
  }
  A64() {
    this.alert.show('A64','Número de recém-nascidos que foram vacinados (BCG e Hepatite B) no HPP.');
  }
  A65() {
    this.alert.show('A65','Agendamento, pelos HPP\'s, da consulta puerperal na Unidade de Saúde da Família, no momento da alta.');
  }


  ionViewWillLoad() {
    this.item = this.navParams.get('item');
    console.log(this.item.A61);
  }
}
