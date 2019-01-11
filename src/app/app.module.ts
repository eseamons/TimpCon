import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BadgesComponent } from './badges/badges.component';
import { AboutComponent } from './about/about.component';
import { VendorsComponent } from './vendors/vendors.component';
import { ContactComponent } from './contact/contact.component';
import { LocationComponent } from './location/location.component';
import { SupportersComponent } from './supporters/supporters.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { GameLibraryComponent } from './game-library/game-library.component';
import { VolunteersComponent } from './volunteers/volunteers.component';
import { PrizeSponsorsComponent } from './prize-sponsors/prize-sponsors.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    BadgesComponent,
    AboutComponent,
    VendorsComponent,
    ContactComponent,
    LocationComponent,
    SupportersComponent,
    SponsorsComponent,
    GameLibraryComponent,
    VolunteersComponent,
    PrizeSponsorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
