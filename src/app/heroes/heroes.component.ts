import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { Observable, of} from 'rxjs';

import { MessageService } from '../messages.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

   hero: Hero = {
    id: 1,
    name: 'Windstorm',
    money: 9000
   };

  heroes = HEROES;
  //hero : Hero[];

  constructor(private heroService: HeroService, private messageService :MessageService) { }

  
  ngOnInit(): void {
    //this.heroes2;
    this.getHeroes();
  }
  
  getHeroes(): void{
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  selectedHero?: Hero;
    onSelect(hero: Hero): void {
    this.selectedHero = hero;
    hero = hero;
    this.messageService.add('HeroesComponent:Selected hero id=${hero.id}');
    // function gooduser():void{
    // alert("alert");
    // }
    // console.log();
    // gooduser();
    // return hero;
  }


}
