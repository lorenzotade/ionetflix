import { Router } from '@angular/router';
import { TvService } from './../services/tv.service';
import { TvSeries } from './../interfaces/TvSeries';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.page.html',
  styleUrls: ['./tv-details.page.scss'],
})
export class TvDetailsPage implements OnInit {

  tvSeries: TvSeries;
  tvId: any;
  imgPath = 'https://image.tmdb.org/t/p/original';

  constructor(
    private tvService: TvService,
    private router: Router
  ) {
    this.tvId = this.router.getCurrentNavigation().extras;
  }

  ngOnInit() {
    this.getSingleTvSeries(this.tvId);
   }

  getSingleTvSeries(id: number) {

    this.tvService.getSingleTvSeries(id)
      .subscribe((res: TvSeries) => {
        this.tvSeries = res;
      });

  }

}
