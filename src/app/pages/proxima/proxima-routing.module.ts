import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProximaPage } from './proxima.page';

const routes: Routes = [
  {
    path: '',
    component: ProximaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProximaPageRoutingModule {}
