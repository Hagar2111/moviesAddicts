import { Component, OnInit, OnDestroy } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, OnDestroy {
  sub:any;
  term:any='';
  trendingMovies:any[] = [];
  imgPrefix:string = 'https://image.tmdb.org/t/p/w500';

  constructor(private _MoviesService:MoviesService) { }

  ngOnInit(): void {
    this.sub = this._MoviesService.getTrending('movie').subscribe((data)=> {

      this.trendingMovies = data.results;
    });
  }

  ngOnDestroy():void{

    this.sub.unsubscribe();
  }
}
