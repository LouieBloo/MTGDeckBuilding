import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { MyDecksComponent } from './components/pages/my-decks/my-decks.component';

const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'decks', component: MyDecksComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}