import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { DemoReelsComponent } from './demo-reels/demo-reels.component';
import { MusicComponent } from './music/music.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { DemoReelComponent } from './demo-reels/demo-reel/demo-reel.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    DemoReelsComponent,
    MusicComponent,
    AboutComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    DemoReelComponent
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
