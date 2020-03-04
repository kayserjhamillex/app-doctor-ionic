import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CitasviewPageRoutingModule } from './citasview-routing.module';

import { CitasviewPage } from './citasview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CitasviewPageRoutingModule
  ],
  declarations: [CitasviewPage]
})
export class CitasviewPageModule {}
