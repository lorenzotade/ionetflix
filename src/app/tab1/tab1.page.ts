import { TrendingMovie } from '../interfaces/TrendingMovie';
import { MovieService } from './../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  imgPath = 'https://image.tmdb.org/t/p/original';
  trendingMovies: TrendingMovie[] = [];
  page: number;

  constructor(
    private movieService: MovieService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getTrendingMovies();
  }

  getTrendingMovies() {
    this.movieService.getTrendingMovies()
      .subscribe((res: any) => {
        this.trendingMovies = res.results;
        this.page = res.page;
        this.trendingMovies.forEach(movie => {
          if (movie.original_title.length > 18) {
            movie.original_title = movie.original_title.slice(0, 18) + '...';
          }
        });
      });
  }

  goToMovie(id: any) {
    const data: NavigationExtras = id;
    this.router.navigate(['/movie-details'], data);
  }

}
