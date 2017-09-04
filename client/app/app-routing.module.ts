import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { HeroDashboardComponent }   from './hero/dashboard/dashboard.component';
import { HeroesComponent }          from './hero/master/heroes.component';
import { HeroDetailComponent }      from './hero/detail/hero-detail.component';
 
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: HeroDashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroesComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}