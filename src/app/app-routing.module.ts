import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BadgesComponent } from './badges/badges.component';
import { AboutComponent } from './about/about.component';
import { VendorsComponent } from './vendors/vendors.component';
import { ContactComponent } from './contact/contact.component';
import { LocationComponent } from './location/location.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'badges', component: BadgesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'vendors', component: VendorsComponent },
  { path: 'location', component: LocationComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
