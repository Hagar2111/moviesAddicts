import { Component, OnInit , OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})
export class MoviedetailsComponent implements OnInit , OnDestroy{
  type:any;
  id:any;
  movieDetails:any;
  imgPrefix:string = 'https://image.tmdb.org/t/p/w500';
  sub:any;
  constructor(private _ActivatedRoute:ActivatedRoute ,private _MoviesService:MoviesService) {}

  ngOnInit(): void {

    this.type = this._ActivatedRoute.snapshot.paramMap.get('mediaType');
    this.id = this._ActivatedRoute.snapshot.params['id'];

    this.sub = this._MoviesService.getTrendingDetails(this.type , this.id).subscribe((response) => {

      this.movieDetails = response;
    })
  }

  ngOnDestroy(): void {

    this.sub.unsubscribe();
  }
}
