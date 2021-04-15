import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
// import { HEROES } from '../mock-heroes';

//is a decorator
@Component({
  //  CLI generated three metadata properties
  selector: 'app-heroes', // the component's CSS element selector
  templateUrl: './heroes.component.html', // the location of the component's template file
  styleUrls: ['./heroes.component.css'] // the location of the component's private CSS styles
})
// Always export the component class so you can import it elsewhere
export class HeroesComponent implements OnInit {

  //When the application starts, the selectedHero is undefined by design.
  // Binding expressions in the template that refer to properties
  // of selectedHero—expressions like {{selectedHero.name}}
  // —must fail because there is no selected hero.

  selectedHero?: Hero;

  heroes : Hero[] = [];

  // The parameter simultaneously defines a private heroService property
  // and identifies it as a HeroService injection site
  constructor(private heroService:  HeroService,
    private messageService: MessageService) {
    // When Angular creates a HeroesComponent,
    // the Dependency Injection system sets the
    // heroService parameter to the singleton instance of HeroService
   }

   getHeros(): void {
     // this.heroes = this.heroService.getHeros();
     this.heroService.getHeros().subscribe(
      heroes => this.heroes = heroes
    );
   }

  ngOnInit(): void {
    // Reserve the constructor for minimal initialization such as
    // wiring constructor parameters to properties.
    // The constructor shouldn't do anything.
    // It certainly shouldn't call a function that makes HTTP requests
    // to a remote server as a real data service would.
    this.getHeros();
  }

  onSelect(hero: Hero) {
    //console.log(hero);
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

}
