import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { NoimagePipe } from './pipes/noimage.pipe';
import { CardsComponent } from './components/cards/cards.component';
import { LoadingComponent } from './components/shared/loading/loading.component';

const myComponent = [ AppComponent, HomeComponent, ArtistComponent, NavbarComponent,SearchComponent, CardsComponent ];

@NgModule({
  declarations: [
  myComponent,
  NoimagePipe,
  DomseguroPipe,
  LoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
