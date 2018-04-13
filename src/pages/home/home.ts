import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';

import { Item } from '../../models/item/item.models';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  item: Item = {
    cidade:'',
    data:'',
    A11:0,
    A12:0,
    A13:0,
    A14:0,
    A15:0,
    A16:0,
    A21:0,
    A22:0,
    A23:0,
    A24:0,
    A25:0,
    A26:0,
    A27:0,
    A28:0,
    A31:0,
    A32:0,
    A33:0,
    A34:0,
    A35:0,
    A36:0,
    A41:0,
    A42:0,
    A51:0,
    A52:0,
    A53:0,
    A54:0,
    A55:0,
    A56:0,
    A57:0,
    A58:0,
    A61:0,
    A62:0,
    A63:0,
    A64:0,
    A65:0,
    };

    constructor(public navCtrl: NavController, public navParams: NavParams) { }
}
