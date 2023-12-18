import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TvShowService {

  discoverUrl: string = "https://api.themoviedb.org/3/discover/tv"
  oneMovieUrl: string = "https://api.themoviedb.org/3/tv"
  searchByTitleUrl: string = "https://api.themoviedb.org/3/search/tv"
  apiKey: string = "1e3922132905930d707275810847ee84"
  
  constructor(private http: HttpClient, private route: Router) { }

  getAllTvShows = (): Observable<any> => {
    return this.http.get<any>(this.discoverUrl + "?page=1&api_key=" + this.apiKey);
  }

  getOneTvShow = (id: number): Observable<any> => {
    return this.http.get<any>(this.oneMovieUrl+"/"+id +"?api_key=" + this.apiKey )
  }

  getByTitle = (name: String): Observable<any> => {
    return this.http.get<any>(this.searchByTitleUrl+"?query="+name + "&api_key=" + this.apiKey);
  }
}
