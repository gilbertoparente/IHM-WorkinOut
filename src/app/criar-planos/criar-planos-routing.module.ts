import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriarPlanosPage } from './criar-planos.page';

const routes: Routes = [
  {
    path: '',
    component: CriarPlanosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriarPlanosPageRoutingModule {}
