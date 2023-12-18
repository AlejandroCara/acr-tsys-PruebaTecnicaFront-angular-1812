import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';
import { TvShowDetailsComponent } from './tv-show-details/tv-show-details.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'movies',
        component: MoviesComponent
    },
    {
        path: 'movie/:id',
        component: MovieDetailsComponent
    },
    {
        path: '404',
        component: NotFoundComponent
    },
    {
        path: 'tv-shows',
        component: TvShowsComponent
    },
    {
        path: 'tv-show/:id',
        component: TvShowDetailsComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
