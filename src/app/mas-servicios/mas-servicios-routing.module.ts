import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MasServiciosPage } from './mas-servicios.page';

const routes: Routes = [
  {
    path: '',
    component: MasServiciosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MasServiciosPageRoutingModule {}
