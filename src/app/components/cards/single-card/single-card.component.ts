import { Component, OnInit,Input } from '@angular/core';
import { SearchCardsService } from '../../../services/cards/search-cards.service';

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.css'],
})
export class SingleCardComponent implements OnInit {

  @Input() id: string;

  cardInfo:any = {};
  noImageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png";
  error:string;

  constructor(private CardAPI:SearchCardsService) { }

  ngOnInit() {

    if(this.id == null)
    {
      this.error = "Need ID!";
      return;
    }

    //fetch card info
    this.CardAPI.getByID(this.id).subscribe(result =>{
      if(result == null)
      {
        this.error = "Couldn't fetch card info";
        return;
      }

      this.cardInfo = result;
    })

  }

  
}
