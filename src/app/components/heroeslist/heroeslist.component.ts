import { Component, OnInit} from '@angular/core';
import { Hero } from '../heroes/hero';
import { HeroService } from '../../services/hero.service';
import 'rxjs/add/operator/toPromise';
import { Http, Jsonp } from '@angular/http';
import { HeroLogger } from '../../services/hero.log';

@Component({
  selector: 'app-heroeslist',
  templateUrl: './heroeslist.component.html',
  styleUrls: ['./heroeslist.component.css']
  // providers: [HeroService],
})

export class HeroeslistComponent implements OnInit {
  selectedHero: Hero;
  constructor(private heroService: HeroService, private http: Http, private jsonp: Jsonp, private heroLogger: HeroLogger) { }
  heroes: Hero[];
  testData:any;
  ngOnInit() {
    this.heroes = this.heroService.getHeroes();
    //异步技术Promise
    // this.heroService.getHeroesByPromise().then(heroes => this.heroes = heroes);
    // this.heroService.getHeroes2().then(heroes => this.heroes = heroes);
    // this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);//延迟两秒加载
    // this.heroService.getHeroesByApi().then(heroes => {
    //   this.heroes = heroes
    // }
    // );
    // this.heroService.getHeroesByApi().then(heroes => this.heroes=heroes);
    this.heroLogger.log("----lsj");
    
    // this.heroService.getTest();
    // console.info('An info occurred', this.testData);
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  public list:any[]; 
  requestData(){

    var _that=this;

    // alert('请求数据');
    var url="http://localhost:8080/user/lsj/li936339745/login";
    this.http.get(url).subscribe(function(data){

      //  console.log(JSON.parse(data['_body']));
      console.log(data);
      //  var list=JSON.parse(data['_body']);
      //  console.log(_that.list['result']);

      //  _that.list=list['result'];
       

    },function(err){

        console.log(err);
    })
  }

  requestJsonpData(){


    // jsonp 必须得在url加回到  &callback=JSONP_CALLBACK
        var _that=this;
        // alert('请求数据');
        //var url="http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1&callback=JSONP_CALLBACK";
    
        var url="http://localhost:8080/user/lsj/li936339745/login&callback=JSONP_CALLBACK";
    
    
        this.jsonp.get(url).subscribe(function(data){
    
           console.log(data);
    
          //  _that.list=data['_body']['result'];
           
    
        },function(err){
    
            console.log(err);
        })
      }
}
