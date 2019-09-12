import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie } from '../domain/movie';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  urlBase = 'https://api.themoviedb.org/3/discover/movie';
  apiKey = '92f4755b479031f27c0380bba179249b';
  sort = 'popularity.desc';
  page = '1';

  constructor(private http: HttpClient) { }

  getDiscoverByPopularity(): Observable<Movie[]> {
    const myUrl = assembleDiscoverUrl(this.urlBase, this.apiKey, this.sort, this.page);
    const options = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    };

    return this.http.get(myUrl, options).pipe(
      map(m => toMovies(m))
    );
  }
}

function toMovies(array: any): Movie[] {
  return array.results as Movie[];
}

function assembleDiscoverUrl(urlBase: string, apiKey: string, sort: string, page: string): string {
  return urlBase + '?api_key=' + apiKey + '&sort_by=' + sort + '&page=' + page;
}
