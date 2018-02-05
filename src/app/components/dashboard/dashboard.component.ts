import { Component, OnInit } from '@angular/core';
import {HeroService} from '../../services/hero.service';
import {Hero} from '../heroes/hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes:Hero[] = [];
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroService.getHeroesByPromise().then(heroes => this.heroes = heroes.slice(1, 5));
  }

}
