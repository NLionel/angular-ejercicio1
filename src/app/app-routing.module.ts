import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesPageComponent } from './movies/pages/movies-page/movies-page.component';
import { DetailMovieComponent } from './movies/component/detail-movie/detail-movie.component';

const getMovie = 'movies/:id';

const routes: Routes = [
  { path: 'moviesPage', component: MoviesPageComponent },
  { path:  getMovie, component: DetailMovieComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
