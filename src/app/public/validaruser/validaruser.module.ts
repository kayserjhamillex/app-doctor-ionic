import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValidaruserPageRoutingModule } from './validaruser-routing.module';

import { ValidaruserPage } from './validaruser.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValidaruserPageRoutingModule
  ],
  declarations: [ValidaruserPage]
})
export class ValidaruserPageModule {}
