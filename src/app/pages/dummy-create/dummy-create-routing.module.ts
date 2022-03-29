import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DummyCreatePage } from './dummy-create.page';

const routes: Routes = [
  {
    path: '',
    component: DummyCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DummyCreatePageRoutingModule {}
