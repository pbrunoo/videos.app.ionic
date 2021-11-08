import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EternosPageRoutingModule } from './eternos-routing.module';

import { EternosPage } from './eternos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EternosPageRoutingModule
  ],
  declarations: [EternosPage]
})
export class EternosPageModule {}
