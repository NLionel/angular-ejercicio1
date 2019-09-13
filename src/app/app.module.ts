import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListMoviesComponent } from './movies/component/list-movies/list-movies.component';
import { MovieComponent } from './movies/component/movie/movie.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailMovieComponent } from './movies/component/detail-movie/detail-movie.component';
import { MoviesPageComponent } from './movies/pages/movies-page/movies-page.component';
import { MovieFullComponent } from './movies/component/movie-full/movie-full.component';
import { DatePipe } from './pipes/date.pipe';
import { TimePipe } from './pipes/time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListMoviesComponent,
    MovieComponent,
    DetailMovieComponent,
    MoviesPageComponent,
    MovieFullComponent,
    DatePipe,
    TimePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
