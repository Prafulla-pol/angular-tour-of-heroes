import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// They provide routing functionality
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';

const appRoutes: Routes = [
  // When the application starts, the browser's address bar points to the web site's root.
  // This route redirects a URL that fully matches the empty path to the route whose path is '/dashboard'
  {path: '', redirectTo: "/dashboard", pathMatch: 'full'},
  {path: 'heroes', component: HeroesComponent}, // localhost:4200/heroes
  {path:'dashboard', component: DashboardComponent},
  // parameterized route
  {path: 'detail/:id', component: HeroDetailsComponent}
];
// path: a string that matches the URL in the browser address bar.
// component: the component that the router should create when navigating to this route.

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // Routes tell the Router which view to display
    // when a user clicks a link or pastes a URL into the browser address bar
    RouterModule.forRoot(appRoutes)
    // The @NgModule metadata initializes the router
    // and starts it listening for browser location changes.

    // The method is called forRoot() because you configure the router
    // at the application's root level.
    // The forRoot() method supplies the service providers and directives
    // needed for routing, and performs the initial navigation
    // based on the current browser URL
  ],
  exports: [RouterModule]
  // exports RouterModule so it will be available throughout the app
})
export class AppRoutingModule { }
