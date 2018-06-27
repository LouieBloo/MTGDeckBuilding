import { Injectable } from '@angular/core';
import * as Magic from 'mtgsdk-ts';
//import Magic = require("mtgsdk-ts");


@Injectable({
  providedIn: 'root'
})
export class SearchCardsService {

  constructor() { }

  searchForCard(){
    console.log("testing");


    
    if(Magic != null)
    {
      console.log("not null luke!");
    }
    //Magic.Cards.find("08618f8d5ebdc0c4d381ad11f0563dfebb21f4ee").then(result => console.log(result.name)); // Blood Scrivener
  }
}
