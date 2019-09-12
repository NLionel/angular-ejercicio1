import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie } from '../domain/movie';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { MovieDetail } from '../domain/movieDetail';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  urlBase = 'https://api.themoviedb.org/3/';
  discoverSufix = 'discover/movie';
  singleMovieSufix = 'movie';
  apiKey = '92f4755b479031f27c0380bba179249b';
  sort = 'popularity.desc';
  page = '1';

  cacheMovie: Movie[] = null;
  cacheMovieDetail: MovieDetail[] = new Array();

  constructor(private http: HttpClient) { }

  getDiscoverByPopularity(): Observable<Movie[]> {
    if (this.cacheMovie) {
      return of(this.cacheMovie);
    }

    const myUrl = assembleDiscoverUrl(this.urlBase + this.discoverSufix, this.apiKey, this.sort, this.page);
    const options = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    };

    return this.http.get(myUrl, options).pipe(
      map(m => {
        const movies = toMovies(m);
        this.cacheMovie = movies;
        return movies;
      })
    );
  }

  getById(id: string): Observable<MovieDetail> {
    if (this.cacheMovieDetail) {
      const indice = this.cacheMovieDetail.findIndex(md => String(md.id) === id);
      if (indice >= 0) {
        return of(this.cacheMovieDetail[indice]);
      }
    }

    const myUrl = assembleSingleMovieUrl(this.urlBase + this.singleMovieSufix, this.apiKey, id);
    const options = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    };

    return this.http.get(myUrl, options).pipe(
      map(md => {
        const movieDetail = toMovieDetail(md);
        this.cacheMovieDetail.push(movieDetail);
        return movieDetail;
      })
    );
  }
}

function toMovies(array: any): Movie[] {
  return array.results as Movie[];
}

function toMovieDetail(obj: any): MovieDetail {
  return obj as MovieDetail;
}

function assembleDiscoverUrl(url: string, apiKey: string, sort: string, page: string): string {
  return url + '?api_key=' + encodeURIComponent(apiKey) + '&sort_by=' + encodeURIComponent(sort) + '&page=' + encodeURIComponent(page);
}

function assembleSingleMovieUrl(url: string, apiKey: string, id: string): string {
  return url + '/' + encodeURIComponent(id) + '?api_key=' + encodeURIComponent(apiKey);
}
