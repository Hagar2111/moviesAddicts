import { Component, OnInit, OnDestroy } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit , OnDestroy {
  sub:any;
  term:any='';
  moviesData:any;
  trendingMovies:any[] = [];
  trendingTv:any[] = [];
  trendingPeople:any[] = [];

  imgPrefix:string = 'https://image.tmdb.org/t/p/w500';

  constructor(private _MoviesService:MoviesService) {}

  ngOnInit(): void {

    this.sub = this._MoviesService.getTrending('all').subscribe((data)=> {

    this.trendingMovies = data.results.filter((item:any)=>{

      return item.media_type =='movie';
    
      }).slice(0, 10);

      this.trendingTv = data.results.filter((item:any)=>{

        return item.media_type== 'tv';
      }).slice(0, 10);

    });

    
    this.sub = this._MoviesService.getTrending('person').subscribe((data)=> {

      this.trendingPeople = data.results.slice(0,10);

    });

    // this.sub = this._MoviesService.getTrending('tv').subscribe((data)=> {

    //   this.trendingTv = data.results.slice(0,10);
    // });

  }

  ngOnDestroy():void{

    this.sub.unsubscribe();
  }
}
