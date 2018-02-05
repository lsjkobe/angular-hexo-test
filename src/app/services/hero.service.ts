import {Heroes} from '../components/heroes/mock-heroes';
import { Injectable } from '@angular/core';
import { Hero } from '../components/heroes/hero';
import { Headers, Http, Jsonp } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService{

    private heroesUrl = 'api/heroes';

    constructor(private http: Http, private httpClient: HttpClient){}
    Heroes1: Hero[];
    getHeroesByPromise() : Promise<Hero[]> {
        return Promise.resolve(Heroes);
    }
    getHeroes() : Hero[] {
        return Heroes;
    }
    getHeroes2() : Promise<Hero[]> {
        // setTimeout(() => this.Heroes1=this.getHeroes(), 2000);
        
         return  new Promise(resolve => {
            this.sleep(2000);
             resolve(Heroes);
        });
    }
    sleep(numberMillis) {
        var now = new Date(); 
        var exitTime = now.getTime() + numberMillis; 
        while (true) { 
            now = new Date(); 
            if (now.getTime() > exitTime) 
            return; 
        }
    }
    getHeroesSlowly() : Promise<Hero[]>{
        return new Promise(resolve => {
            // Simulate server latency with 2 second delay
            setTimeout(() => resolve(this.getHeroesByPromise()), 2000);
          });
    }
    getHeroById(id: number): Promise<Hero>{
        return this.getHeroesByPromise().then(heroes => Heroes.find(hero => hero.id === id));
    }

    getHeroesByApi(): Promise<Hero[]>{
        return this.http.get(this.heroesUrl)
                        .toPromise()
                        .then(response => response.json() as Hero[])
                        .catch(this.handleError);
    }

    getHeroByIdInApi(id: number): Promise<Hero>{
        const url = `${this.heroesUrl}/${id}`;
        return this.http.get(url).toPromise().then(Response => 
            Response.json() as Hero
        ).catch(this.handleError);
    }
    results:any;
    getTest(){
        const url = 'http://baike.baidu.com';
        const url2 = 'http://localhost:8080/user/lsj/li936339745/login';
        // return this.http.get(url2).toPromise().then(Response => Response.json() as any).catch(this.handleError);
        // return this.http.get(url2).subscribe(data => {
        //     // Read the result field from the JSON response.
        //     console.info(data);
        //   });
         this.http.get(url2).subscribe(
            function(data){
                console.log(data);
            },function(err){
                console.log(err);
            }
        );
        // this.http.get(url2).subscribe((data) => {});
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}