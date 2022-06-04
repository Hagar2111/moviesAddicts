import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient:HttpClient ) { }

  getTrending(mediaType:string):Observable<any>
{
  return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=f1aca93e54807386df3f6972a5c33b50`)
}

//   getMovieDetails(id:string):Observable<any>
// {
//   return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=c636ed7787cc302d96bf88ccf334e0d8&language=en-US`)
// }

getTrendingDetails(mediaType:any, id:number):Observable<any>
{
  return this._HttpClient.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=c636ed7787cc302d96bf88ccf334e0d8&language=en-US`)
}
}

