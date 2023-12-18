import { Component } from '@angular/core';
import { TvShow } from '../model/tv-show.model';
import { TvShowService } from '../service/tv-show.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tv-show-details',
  standalone: true,
  imports: [],
  templateUrl: './tv-show-details.component.html',
  styleUrl: './tv-show-details.component.css'
})
export class TvShowDetailsComponent {

  tvShow: TvShow = new TvShow;
  
  constructor(private tvShowService: TvShowService, private activeRoute: ActivatedRoute, private route: Router){

  }

  ngOnInit(){
    let urlId = Number(this.activeRoute.snapshot.paramMap.get('id'));
    this.tvShowService.getOneTvShow(urlId).subscribe(
      result => {
        this.tvShow = result;
      },
      error => {
        this.route.navigateByUrl('404');
      }
    );
  }

}
