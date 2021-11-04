import { NavigationExtras, Router } from '@angular/router';
import { PreviewMovie } from './../interfaces/PreviewMovie';
import { SearchService } from './../services/search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  searchedMovies: PreviewMovie[] = [];
  imgPath = 'https://image.tmdb.org/t/p/original';
  query = '';

  constructor(
    private searchService: SearchService,
    private router: Router
  ) {}

  ngOnInit() {

    this.searchedMovies = [];

  }

  searchMovie(formValue: any) {

    this.searchService.searchMovies(formValue.query)
      .subscribe((res: any) => {
        this.searchedMovies = res.results;
        this.searchedMovies.forEach(movie => {
          if (movie.original_title.length > 18) {
            movie.original_title = movie.original_title.slice(0, 18) + '...';
          }
        });
        this.query = '';
      });

  }

  goToMovie(id: any) {

    const data: NavigationExtras = id;
    this.router.navigate(['/movie-details'], data);

  }

}
