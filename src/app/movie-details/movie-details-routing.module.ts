import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieDetailsPage } from './movie-details.page';

const routes: Routes = [
  {
    path: 'movie-details/:id',
    component: MovieDetailsPage
  },
  {
    path: '',
    component: MovieDetailsPage,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieDetailsPageRoutingModule {}
