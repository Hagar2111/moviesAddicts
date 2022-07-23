 import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(trendingMovies:any[], searchText:string): any {
    return trendingMovies.filter((item)=>{
      if(item.title)
      {
        return item.title.toLowerCase().includes(searchText.toLowerCase());
      }
      else
      {
        return item.name.toLowerCase().includes(searchText.toLowerCase());
      }
    }) ;
  }

}
