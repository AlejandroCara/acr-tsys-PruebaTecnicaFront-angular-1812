import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Movie } from '../model/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  discoverUrl: string = "https://api.themoviedb.org/3/discover/movie"
  oneMovieUrl: string = "https://api.themoviedb.org/3/movie"
  searchByTitleUrl: string = "https://api.themoviedb.org/3/search/movie"
  apiKey: string = "1e3922132905930d707275810847ee84"
  
  constructor(private http: HttpClient, private route: Router) { }

  getAllMovies = (): Observable<any> => {
    return this.http.get<any>(this.discoverUrl + "?page=1&api_key=" + this.apiKey);
  }

  getOneMovie = (id: number): Observable<any> => {
    return this.http.get<any>(this.oneMovieUrl+"/"+id +"?api_key=" + this.apiKey );
  }

  getByTitle = (title: String): Observable<any> => {
    return this.http.get<any>(this.searchByTitleUrl+"?query="+title + "&api_key=" + this.apiKey);
  }
}
