import { Component, OnInit } from '@angular/core';
import { MovieService } from '../service/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../model/movie.model';
import { Genre } from '../model/genre.model';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent implements OnInit{

  movie: Movie = new Movie;
  
  constructor(private movieService: MovieService, private activeRoute: ActivatedRoute, private route: Router){

  }

  ngOnInit(){
    let urlId = Number(this.activeRoute.snapshot.paramMap.get('id'));
    this.movieService.getOneMovie(urlId).subscribe(
      result => {
        this.movie = result;
      },
      error => {
        this.route.navigateByUrl('404');
      }
    );
  }

}
