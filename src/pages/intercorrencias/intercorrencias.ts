import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item/item.models';
import { AlertService } from '../../service/alert/alert.service';

@IonicPage()
@Component({
  selector: 'page-intercorrencias',
  templateUrl: 'intercorrencias.html',
})
export class IntercorrenciasPage {
  item: Item;

  constructor(public navCtrl: NavController, public navParams: NavParams,private alert: AlertService) {
  }

  A41() {
    this.alert.show('A41','Número de episotomias..');
  }
  A42() {
    this.alert.show('A42','Número de lacerações.');
  }

  ionViewWillLoad() {
    this.item = this.navParams.get('item');
    console.log(this.item.A41);
  }
}
