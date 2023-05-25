import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TreinarPageRoutingModule } from './treinar-routing.module';

import { TreinarPage } from './treinar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TreinarPageRoutingModule
  ],
  declarations: [TreinarPage]
})
export class TreinarPageModule {}
