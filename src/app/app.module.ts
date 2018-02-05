import { BrowserModule } from '@angular/platform-browser'; //BrowserModule 浏览器解析模块
import { NgModule } from '@angular/core'; //angular核心模块
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { HttpModule, JsonpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component'; //自定义模块;
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeslistComponent } from './components/heroeslist/heroeslist.component'
import { HeroService } from './services/hero.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroRoutingModule }     from './routers/hero.routing.module';
import { HeroLogger } from './services/hero.log';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroeslistComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    JsonpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    HeroRoutingModule,
    
  ],
  providers: [HeroService, HeroLogger],
  bootstrap: [AppComponent]
})
export class AppModule { }

