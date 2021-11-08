import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EternosPage } from './eternos.page';

const routes: Routes = [
  {
    path: '',
    component: EternosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EternosPageRoutingModule {}
