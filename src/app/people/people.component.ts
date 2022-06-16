import { Component, OnInit, OnDestroy } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit, OnDestroy {

  sub:any;
  term:any;
  trendingPeople:any[]=[];
  imgPrefix:string = 'https://image.tmdb.org/t/p/w500';

  constructor(private _MoviesService:MoviesService) { }

  ngOnInit(): void {
    this.sub = this._MoviesService.getTrending('person').subscribe((data)=>{

      this.trendingPeople = data.results;
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
