import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { TreinarPageRoutingModule } from './treinar-routing.module';

import { TreinarPage } from './treinar.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    IonicModule.forRoot(),
    TreinarPageRoutingModule
  ],
  declarations: [TreinarPage]
})
export class TreinarPageModule {}


