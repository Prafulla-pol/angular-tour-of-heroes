import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';

//is a decorator
@Component({
  //  CLI generated three metadata properties
  selector: 'app-heroes', // the component's CSS element selector
  templateUrl: './heroes.component.html', // the location of the component's template file
  styleUrls: ['./heroes.component.css'] // the location of the component's private CSS styles
})
// Always export the component class so you can import it elsewhere
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
