import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";

import { Item } from "../../models/item/item.models";

@Injectable()
export class ColetaListService {
    private coletaListRef = this.db.list<Item>('coletas');
    constructor(private db: AngularFireDatabase){ }

    getColetaList(){
        return this.coletaListRef;
    }

    addItem(item: Item){
        return this.coletaListRef.push(item);
    }

    editItem(item: Item){
        return this.coletaListRef.update(item.key,item);
    }

    removeItem(item: Item){
        return this.coletaListRef.remove(item.key);
    }
}