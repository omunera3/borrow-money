import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormDataPage } from './form-data.page';

const routes: Routes = [
  {
    path: '',
    component: FormDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormDataPageRoutingModule {}
