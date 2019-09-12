import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/domain/movie';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { MovieDetail } from 'src/app/domain/movieDetail';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.css']
})
export class DetailMovieComponent implements OnInit {
  @Input() movie: MovieDetail;
  error: string = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private moviesService: MoviesService
  ) { }

  ngOnInit() {
    const movieId = this.route.snapshot.paramMap.get('id');
    if (movieId) {
      this.moviesService.getById(movieId).subscribe(
        data => this.loadMovie(data),
        error => this.handleError(error)
      );
    }
  }

  loadMovie(movie: MovieDetail): void {
    this.movie = movie;
    this.error = null;
  }

  handleError(error: any): void {
    this.movie = null;
    this.error = error.message;
  }

  back() {
    this.router.navigate(['/moviesPage']);
  }

}
