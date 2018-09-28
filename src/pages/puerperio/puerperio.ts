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
    this.alert.show('A61','Número de RN, de parto assistido por ENFO, que demandou avaliação com pediatra.');
  }
  A62() {
    this.alert.show('A62','Número de recém-nascidos que foram vacinados (BCG e Hepatite B) no HPP.');
  }
  A63() {
    this.alert.show('A63','Agendamento, pelos HPP\'s, da consulta puerperal na Unidade de Saúde da Família, no momento da alta.');
  }


  ionViewWillLoad() {
    this.item = this.navParams.get('item');
    console.log(this.item.A61);
  }
}
