import { Component, OnInit, OnDestroy } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit, OnDestroy {

  sub:any;
  term:any='';
  tvShows:any[]=[];
  imgPrefix:string = 'https://image.tmdb.org/t/p/w500';

  constructor(private _MoviesService:MoviesService) { }

  ngOnInit(): void {
    this.sub = this._MoviesService.getTrending('tv').subscribe((data)=>{
      this.tvShows = data.results;
    });
  }
  
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
