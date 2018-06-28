import { Injectable } from '@angular/core';
import {Cards, Card, CardFilter} from 'mtgsdk-ts';
import { Observable ,from} from 'rxjs';
//  import 'rxjs/add/observable/of';
//import Magic = require("mtgsdk-ts");



@Injectable({
  providedIn: 'root'
})
export class SearchCardsService {

  constructor() {}

  search(filter:CardFilter):Observable<Card[]>{
    return from(
     Cards.where(filter).then(results => {
       return results;
      })
    );
  }

  getByID(id:string): Observable<Card>{
    return from(
      Cards.find(id).then(card =>{
        return card;
      }).catch(exception =>{
        return null;
      })
    );
  }
}