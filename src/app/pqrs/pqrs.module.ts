import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PqrsPageRoutingModule } from './pqrs-routing.module';

import { PqrsPage } from './pqrs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    PqrsPageRoutingModule
  ],
  declarations: [PqrsPage]
})
export class PqrsPageModule {}
