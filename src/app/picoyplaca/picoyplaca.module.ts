import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PicoyplacaPageRoutingModule } from './picoyplaca-routing.module';

import { PicoyplacaPage } from './picoyplaca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PicoyplacaPageRoutingModule
  ],
  declarations: [PicoyplacaPage]
})
export class PicoyplacaPageModule {}
