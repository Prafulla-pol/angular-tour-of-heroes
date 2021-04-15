import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// Every component must be declared in exactly one NgModule
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    // AppModule declares all application components,
    AppComponent,
    HeroesComponent,
    HeroDetailsComponent,
    MessagesComponent
  ],
  imports: [
    // All modules are imported
    BrowserModule,
    FormsModule
  ],
  // A provider is something that can create or deliver a service
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
