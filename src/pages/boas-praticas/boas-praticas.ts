import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Item } from '../../models/item/item.models';

@IonicPage()
@Component({
  selector: 'page-boas-praticas',
  templateUrl: 'boas-praticas.html',
})
export class BoasPraticasPage {
  item: Item;

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewWillLoad() {
    this.item = this.navParams.get('item');
    console.log(this.item.A51);
  }
}
