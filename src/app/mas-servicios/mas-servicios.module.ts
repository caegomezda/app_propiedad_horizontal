import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MasServiciosPageRoutingModule } from './mas-servicios-routing.module';

import { MasServiciosPage } from './mas-servicios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MasServiciosPageRoutingModule
  ],
  declarations: [MasServiciosPage]
})
export class MasServiciosPageModule {}
