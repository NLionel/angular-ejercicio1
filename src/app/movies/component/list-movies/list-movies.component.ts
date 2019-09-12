import { Component, OnInit, OnDestroy } from '@angular/core';
import { Movie } from '../../../domain/movie';
import { MoviesService } from '../../../services/movies.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit, OnDestroy {
  movies: Movie[] = [];
  error: string = null;

  private sub: Subscription;

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.sub = this.moviesService.getDiscoverByPopularity().subscribe(
      data => { this.loadData(data); },
      error => { this.handleError(error); }
    );
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
      this.sub = null;
    }
  }

  loadData(data: Movie[]): void {
    this.movies = data;
    this.error = null;
  }

  handleError(error: any): void {
    this.movies = [];
    this.error = error.toString();
  }
}
