import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private http: HttpClient
  ) { }

  searchMovies(query) {

    const endpoint = `search/movie?${environment.apiKey}`;

    return this.http.get(environment.apiUrl + endpoint + `&query=${query}`);

  }

}
