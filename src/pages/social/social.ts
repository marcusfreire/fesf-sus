import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Item } from '../../models/item/item.models';
import { AlertService } from '../../service/alert/alert.service';

/**
 * Generated class for the SocialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-social',
  templateUrl: 'social.html',
})
export class SocialPage {
  item: Item;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alert: AlertService) {
  }

  A11() {
    this.alert.show('A11','Número de gestantes com data provável do parto para o período atual que são mães solteiras.');
  }
  A12() {
    this.alert.show('A12','Número de gestantes com data provável do parto para o perı́odo atual que têm quatro ou mais filhos.');
  }
  A13() {
    this.alert.show('A13','Número de gestantes com data provável do parto para o perı́odo atual que perdeu algum filho com idade menor ou igual a um ano.');
  }
  A14() {
    this.alert.show('A14','Número de gestantes com data provável do parto para o perı́odo atual que possuem uma renda familiar menor ou igual a um salário mı́nimo.');
  }
  A15() {
    this.alert.show('A15','Número de gestantes com data provável do parto para o perı́odo atual que apresentam quadro de desnutrição ou tem algum filho desnutrido.');
  }
  A16() {
    this.alert.show('A16','Número de gestantes analfabetas com data provável do parto para o perı́odo atual.');
  }


  ionViewWillLoad() {
    this.item = this.navParams.get('item');
    console.log(`Social ${this.item.cidade}`);
  }
}
