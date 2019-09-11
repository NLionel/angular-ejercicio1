import { Component, OnInit } from '@angular/core';
import { Movie } from '../domain/movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit {
  movies: Movie[];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movies = this.movieService.getMovies();
  }

}
