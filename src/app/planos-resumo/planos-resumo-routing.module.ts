import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanosResumoPage } from './planos-resumo.page';

const routes: Routes = [
  {
    path: '',
    component: PlanosResumoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanosResumoPageRoutingModule {}
