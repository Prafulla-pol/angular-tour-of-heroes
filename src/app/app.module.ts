import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// Every component must be declared in exactly one NgModule
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  declarations: [
    // AppModule declares all application components,
    AppComponent,
    HeroesComponent
  ],
  imports: [
    // All modules are imported
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
