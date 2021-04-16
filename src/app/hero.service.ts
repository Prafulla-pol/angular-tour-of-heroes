import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './Hero';

import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

// This decorater marks the class as one that participates
// in the dependency injection system
@Injectable({
  providedIn: 'root'
  // When you provide the service at the root level,
  // Angular creates a single, shared instance of HeroService
  // and injects into any class that asks for it
})
export class HeroService {
  // Angular will inject the singleton MessageService
  // into that property when it creates the HeroService
   constructor(private messageService: MessageService) {
   }

  // getHeros(): Hero[] {
  //   return HEROES;
  // }

  // Angular's HttpClient methods return RxJS Observables
  // Real life it will be async
  // The HeroService must wait for the server to respond,
  // getHeroes() cannot return immediately with hero data,
  //  and the browser will not block while the service waits
  getHeros(): Observable<Hero[]> {
    const heros = of(HEROES);
    // of(HEROES) returns an Observable<Hero[]>
    this.messageService.add('HeroService: fetched heroes');
    return heros;
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(h => h.id === id) as Hero;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
