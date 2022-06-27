import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsambleasPageRoutingModule } from './asambleas-routing.module';

import { AsambleasPage } from './asambleas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsambleasPageRoutingModule
  ],
  declarations: [AsambleasPage]
})
export class AsambleasPageModule {}
