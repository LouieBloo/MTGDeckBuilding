import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SingleCardComponent } from './components/cards/single-card/single-card.component';
import { HomeComponent } from './components/pages/home/home.component';
import { MyDecksComponent } from './components/pages/my-decks/my-decks.component';
import { SearchComponent } from './components/pages/search/search.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SingleCardComponent,
    HomeComponent,
    MyDecksComponent,
    SearchComponent,
    SearchBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
