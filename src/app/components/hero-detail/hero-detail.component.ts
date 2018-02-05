import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../heroes/hero';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {HeroService} from '../../services/hero.service';
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  testValue:String = '';
  constructor(
    private route:ActivatedRoute,
    private heroService:HeroService,
    private location:Location
  ) { }

  ngOnInit() {
    // this.route.paramMap.switchMap((params:ParamMap) => this.heroService.getHeroById(+params.get('id'))).subscribe(hero => this.hero = hero);
    this.route.paramMap.switchMap((params:ParamMap) => this.heroService.getHeroByIdInApi(+params.get('id'))).subscribe(hero => this.hero = hero);
  }
  goBack(): void {
    this.location.back();
  }
  onKeyup(value:String){
    this.testValue += value + ' | ';
  }

  
}
