import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatepasswordPageRoutingModule } from './updatepassword-routing.module';

import { UpdatepasswordPage } from './updatepassword.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatepasswordPageRoutingModule
  ],
  declarations: [UpdatepasswordPage]
})
export class UpdatepasswordPageModule {}
