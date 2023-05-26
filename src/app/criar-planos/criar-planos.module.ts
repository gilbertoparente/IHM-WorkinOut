import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriarPlanosPageRoutingModule } from './criar-planos-routing.module';

import { CriarPlanosPage } from './criar-planos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriarPlanosPageRoutingModule
  ],
  declarations: [CriarPlanosPage]
})
export class CriarPlanosPageModule {}
