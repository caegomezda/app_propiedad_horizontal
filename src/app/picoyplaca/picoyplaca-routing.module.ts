import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PicoyplacaPage } from './picoyplaca.page';

const routes: Routes = [
  {
    path: '',
    component: PicoyplacaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PicoyplacaPageRoutingModule {}
