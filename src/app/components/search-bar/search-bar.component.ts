import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  searchQuery:string;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  submit(){
    if(this.searchQuery != null && this.searchQuery != ""){
      this.router.navigate(["/search/"+this.searchQuery]);
    }
  }

}
