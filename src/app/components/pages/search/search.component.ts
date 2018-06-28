import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card, CardFilter } from 'mtgsdk-ts';
import { SearchCardsService } from '../../../services/cards/search-cards.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchResults:Card[];
  query:string;

  format:string;
  

  constructor(private activatedRoute: ActivatedRoute,private CardAPI: SearchCardsService) { }

  ngOnInit() {
    
    this.activatedRoute.params.subscribe(params=>{
      this.query = params.query;
      this.fetchResults();
    })
    
  }

  fetchResults(){
    console.log("Fetching");
    let filter: CardFilter = {
      name: this.query,
      gameFormat:this.format
    };

    this.CardAPI.search(filter).subscribe(result =>{
      this.searchResults = result;
    })
  }

}
