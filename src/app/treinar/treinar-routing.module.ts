import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TreinarPage } from './treinar.page';

const routes: Routes = [
  {
    path: '',
    component: TreinarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TreinarPageRoutingModule {}
