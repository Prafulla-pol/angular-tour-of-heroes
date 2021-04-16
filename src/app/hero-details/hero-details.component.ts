import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../Hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {

  @Input() hero: Hero;

  constructor(
    // The ActivatedRoute holds information about the route to this instance
    private route: ActivatedRoute,
    private heroService: HeroService,
    // The location is an Angular service for interacting with the browser
    private location: Location
  ) { }

  getHero(): void {
    // The route.snapshot is a static image of the route information
    // shortly after the component was created
    const id = Number(this.route.snapshot.paramMap.get('id'));
    // Route parameters are always strings
    this.heroService.getHero(id).subscribe(
      hero => this.hero = hero
    );
  }
  ngOnInit(): void {
    this.getHero();
  }

  goBack(): void {
    this.location.back();
    // navigates backward one step in the browser's history
  }

}
