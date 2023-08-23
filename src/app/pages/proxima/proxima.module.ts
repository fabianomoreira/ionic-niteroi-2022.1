import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProximaPageRoutingModule } from './proxima-routing.module';

import { ProximaPage } from './proxima.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProximaPageRoutingModule
  ],
  declarations: [ProximaPage]
})
export class ProximaPageModule {}
