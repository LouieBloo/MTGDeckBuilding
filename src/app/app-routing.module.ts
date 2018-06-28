import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { MyDecksComponent } from './components/pages/my-decks/my-decks.component';
import { SearchComponent } from './components/pages/search/search.component';

const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'decks', component: MyDecksComponent },
  { path: 'search/:query', component: SearchComponent}
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}