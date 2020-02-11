import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DoctorcitasPage } from './doctorcitas.page';
import { DoctorcitasPageRoutingModule } from './doctorcitas-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoctorcitasPageRoutingModule
  ],
  declarations: [DoctorcitasPage]
})
export class DoctorcitasPageModule {}
