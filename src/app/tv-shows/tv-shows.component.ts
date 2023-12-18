import { Component } from '@angular/core';
import { TvShow } from '../model/tv-show.model';
import { TvShowService } from '../service/tv-show.service';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-tv-shows',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './tv-shows.component.html',
  styleUrl: './tv-shows.component.css'
})
export class TvShowsComponent {

  tvShows: TvShow[] = [];

  constructor(private tvShowService: TvShowService) {

  }

  ngOnInit() {
    this.tvShowService.getAllTvShows().subscribe(
      result => {
        this.tvShows = result.results;
        console.log(result.results)
      },
      error => {
        console.log("ERR")
      }
    );
  }
}
