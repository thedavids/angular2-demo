import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';
 
import { AppComponent }           from './app.component';
import { HeroDashboardComponent } from './hero/dashboard/dashboard.component';
import { HeroDetailComponent }    from './hero/detail/hero-detail.component';
import { HeroesComponent }        from './hero/master/heroes.component';
import { HeroService }            from './hero/hero.service';
 
import { AppRoutingModule }       from './app-routing.module';
 
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeroDashboardComponent,
    HeroDetailComponent,
    HeroesComponent
  ],
  providers: [ HeroService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }