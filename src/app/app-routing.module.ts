import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DemoReelsComponent } from './demo-reels/demo-reels.component';
import { HomeComponent } from './home/home.component';
import { MusicComponent } from './music/music.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about2', component: AboutComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'demoreels', component: DemoReelsComponent },
  { path: 'music2', component: MusicComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
