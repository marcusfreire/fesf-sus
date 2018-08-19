import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";

import { Cidade } from "../../models/cidade";

@Injectable()
export class CidadeListService {
    private cidadeListRef = this.db.list<Cidade>('cidades', ref => ref.orderByChild("nome"));
    constructor(private db: AngularFireDatabase){ }

    getCidadeList(){
        return this.cidadeListRef;
    }

    busca(chave:string){
        return this.db.list<Cidade>('cidades', ref => ref.orderByChild("nome"))
            .snapshotChanges()
            .map (Changes => {
                return Changes.map(p => ({
                chave: p.payload.key, ...p.payload.val()}));
            })
    }

    addCidade(cidade: Cidade){
        return this.cidadeListRef.push(cidade);
    }

    editCidade(cidade: Cidade){
        return this.cidadeListRef.update(cidade.key,cidade);
    }

    removeCidade(cidade: Cidade){
        return this.cidadeListRef.remove(cidade.key);
    }
}