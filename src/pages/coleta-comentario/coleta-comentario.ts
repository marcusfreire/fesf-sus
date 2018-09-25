import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item/item.models';

/**
 * Generated class for the ColetaComentarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-coleta-comentario',
  templateUrl: 'coleta-comentario.html',
})
export class ColetaComentarioPage {

  item: Item;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillLoad() {
    this.item = this.navParams.get('item');
  }

}
