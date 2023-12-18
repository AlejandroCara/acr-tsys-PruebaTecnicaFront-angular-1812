import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MovieService } from '../service/movie.service';
import { Movie } from '../model/movie.model';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent implements OnInit{

  movies: Movie[] = [];

  constructor(private movieService: MovieService) {

  }

  ngOnInit() {
    this.movieService.getAllMovies().subscribe(
      result => {
        this.movies = result.results;
      },
      error => {
        
      }
    );
  }

  onSearchClick = (e:Event): void => {
    let title = (<HTMLInputElement>document.getElementById('movieSearchBar')).value;
    title = title.replace(' ', '+');
    this.movieService.getByTitle(title).subscribe(
      result => {
        this.movies = result.results;
        console.log(this.movies)
      },
      error => {
        
      }
    );
  }
}
