import { NavigationExtras, Router } from '@angular/router';
import { TrendingTv } from './../interfaces/TrendingTv';
import { Component, OnInit } from '@angular/core';
import { TvService } from '../services/tv.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  trendingTv: TrendingTv[];
  imgPath = 'https://image.tmdb.org/t/p/original';

  constructor(
    private tvService: TvService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getTrendingTvSeries();
  }

  getTrendingTvSeries() {
    this.tvService.getTrendingTvSeries()
      .subscribe((res: any) => {
        this.trendingTv = res.results;
      });
  }

  goToTv(id: any) {
    const data: NavigationExtras = id;
    this.router.navigate(['/tv-details'], data);
  }

}
