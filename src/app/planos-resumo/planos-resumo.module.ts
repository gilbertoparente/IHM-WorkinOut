import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlanosResumoPageRoutingModule } from './planos-resumo-routing.module';

import { PlanosResumoPage } from './planos-resumo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanosResumoPageRoutingModule
  ],
  declarations: [PlanosResumoPage]
})
export class PlanosResumoPageModule {}
