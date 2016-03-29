import { Component, OnInit } from 'angular2/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router } from 'angular2/router'



@Component({
	selector: 'my-dashboard',
	templateUrl: 'app/dashboard.component.html', 
	styleUrls: ['app/dashboard.component.css']

})
export class DashboardComponent implements OnInit { 
	public heroes: Hero[] = [];
	constructor(private _heroService: HeroService, private _router:Router){}
	goToDetail(hero: Hero) {
		let link = ['HeroDetail', { id: hero.id }];
		this._router.navigate(link);
	}
	ngOnInit(){
		this._heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
	}
}
