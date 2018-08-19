import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";

import { Item } from "../../models/item/item.models";

@Injectable()
export class ColetaListService {
    private coletaListRef = this.db.list<Item>('coletas',ref => ref.orderByChild('cidade'));
    private teste = this.db.list<Item>('coletas',ref => ref.orderByChild('data'));
    constructor(private db: AngularFireDatabase){ }

    getColetaList(){
        return this.coletaListRef;
    }

    busca(chave:string){
        var teste = this.db.list<Item>('coletas',ref => ref.orderByChild('cidade').equalTo(chave));
        return teste
        .snapshotChanges()
        .map(changes => {
        return changes.map(c => ({
            key: c.payload.key,
            ...c.payload.val(),
        }));
        });
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