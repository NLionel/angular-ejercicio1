import { Injectable } from '@angular/core';
import { Movie } from '../domain/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  getMovies(): Movie[] {
    return [
      { title: 'Casablanca', year: 1942 },
      { title: 'The Godfather', year: 1972 },
      { title: 'Jaws', year: 1975 },
      { title: 'Reservoir Dogs', year: 1992 }
    ];
  }
}
