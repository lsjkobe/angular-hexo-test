import { Component, OnInit, Input } from '@angular/core';
import {Hero} from './hero';
import {Router} from '@angular/router';
import { HeroLogger } from '../../services/hero.log';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  @Input() hero: Hero;
  constructor(
    private router: Router,
    private heroLogger: HeroLogger
  ) { }
  ngOnInit() {
    this.function1(1,2,3,4,5);
    var args = [
      1,
      2
    ];
    // this.function2(...args);
  }
  gotoDetail(){
    this.router.navigate(['/detail', this.hero.id]);
  }

  function1(...string){
    string.forEach(element => {
      this.heroLogger.log(element);
    });
  }

  function2(a,b,c){
    this.heroLogger.log(a);
    this.heroLogger.log(b);
    this.heroLogger.log(c);
  }
}



