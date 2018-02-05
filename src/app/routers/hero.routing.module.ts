import { RouterModule, Routes }   from '@angular/router';
import { HeroeslistComponent } from '../components/heroeslist/heroeslist.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { HeroDetailComponent } from '../components/hero-detail/hero-detail.component';
import { NgModule } from '@angular/core';

const routes:Routes = [
    {
      path: 'heroes',
      component: HeroeslistComponent
    },
    {
      path: 'dashboard',
      component: DashboardComponent
    },
    {
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full'
    },
    {
      path: 'detail/:id',
      component: HeroDetailComponent 
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})

export class HeroRoutingModule {}