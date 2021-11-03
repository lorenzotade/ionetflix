import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../interfaces/Movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {

  movie: Movie;
  movieId: any;
  imgPath = 'https://image.tmdb.org/t/p/original';

  constructor(
    private movieService: MovieService,
    private router: Router
  ) {
    this.movieId = this.router.getCurrentNavigation().extras;
  }

  ngOnInit() {
    this.getSingleMovie(this.movieId);
  }

  getSingleMovie(id: number) {

    this.movieService.getSingleMovie(id)
      .subscribe((res: Movie) => {
        this.movie = res;
      });
  }

}
