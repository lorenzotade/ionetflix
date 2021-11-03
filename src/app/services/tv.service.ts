import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TvService {

  constructor(
    private http: HttpClient
  ) { }

  getTrendingTvSeries() {

    const endpoint = 'trending/tv/week?';

    return this.http.get(environment.apiUrl + endpoint + environment.apiKey);

  }

  getSingleTvSeries(id: number) {

    const endpoint = `tv/${id}?${environment.apiKey}&language=en-US`;

    return this.http.get(environment.apiUrl + endpoint);

  }
}
