import {Component} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';
import {OnInit} from 'angular2/core';
import {Router} from 'angular2/router';


@Component({
    selector: 'my-heroes',
    styleUrls:['app/heroes.component.css'],
    templateUrl:'app/heroes.component.html',
	directives: [HeroDetailComponent]
})

export class HeroesComponent implements OnInit {
	public hero: Hero = { id: 1, name: 'Windstorm' };
	public selectedHero: Hero;
	public heroes: Hero[];
	constructor(private _heroService: HeroService, private _router:Router) { }
	onSelect(hero: Hero) { this.selectedHero = hero; }
	getHeroes() { this._heroService.getHeroesSlowly().then(heroes => this.heroes = heroes); }
	ngOnInit() { this.getHeroes(); }
  gotoDetail() {
    this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
  }
}

