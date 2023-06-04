import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarPlanosPageRoutingModule } from './editar-planos-routing.module';

import { EditarPlanosPage } from './editar-planos.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarPlanosPageRoutingModule,
    RouterModule.forChild([{ path: '', component: EditarPlanosPage }])
  ],
  declarations: [EditarPlanosPage]
})
export class EditarPlanosPageModule {}
