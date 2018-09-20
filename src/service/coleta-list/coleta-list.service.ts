import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";

import { Item } from "../../models/item/item.models";

@Injectable()
export class ColetaListService {
    private coletaListRef = this.db.list<Item>('coletas',ref => ref.orderByChild('cidade'));
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

    busca2(chave:string, data: string){
        var flag =false
        var teste = this.db.list<Item>('coletas',ref => ref.orderByChild('cidade'));
        teste.query.equalTo(chave)
            .on('child_added', function(snapshot) { 
                var date = snapshot.val();
                if(date.data == data){
                    flag = true
                }
            });
        return flag;
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