import { Component, OnInit } from '@angular/core';
import { SearchCardsService } from '../../../services/cards/search-cards.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private CardAPI : SearchCardsService) { }

  ngOnInit() {
    this.CardAPI.searchForCard();
  }

}
