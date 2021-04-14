import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';
import { HEROES } from '../mock-heroes';

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

  heroes : Hero[];

  constructor() { }

  ngOnInit(): void {
    this.heroes = HEROES;
  }

  onSelect(hero: Hero) {
    //console.log(hero);
    this.selectedHero = hero;
  }

}
