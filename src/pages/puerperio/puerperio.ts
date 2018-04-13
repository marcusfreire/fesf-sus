import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Item } from '../../models/item/item.models';

@IonicPage()
@Component({
  selector: 'page-puerperio',
  templateUrl: 'puerperio.html',
})
export class PuerperioPage {
  item: Item;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillLoad() {
    this.item = this.navParams.get('item');
    console.log(this.item.A61);
  }
}
