import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DummyCreatePageRoutingModule } from './dummy-create-routing.module';

import { DummyCreatePage } from './dummy-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DummyCreatePageRoutingModule
  ],
  declarations: [DummyCreatePage]
})
export class DummyCreatePageModule {}
