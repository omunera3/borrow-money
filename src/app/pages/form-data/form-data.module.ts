import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormDataPageRoutingModule } from './form-data-routing.module';

import { FormDataPage } from './form-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormDataPageRoutingModule
  ],
  declarations: [FormDataPage]
})
export class FormDataPageModule {}
