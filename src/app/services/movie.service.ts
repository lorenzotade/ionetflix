import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Movie } from '../interfaces/Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(
    private http: HttpClient
  ) { }

  getTrendingMovies(page: number = 1) {

    const endpoint = 'trending/movie/week?';

    return this.http.get(environment.apiUrl + endpoint + environment.apiKey + '&page=' + page);

  }

  getSingleMovie(id: number) {

    const endpoint = `movie/${id}?`;

    return this.http.get<Movie>(environment.apiUrl + endpoint + environment.apiKey);

  }

}
