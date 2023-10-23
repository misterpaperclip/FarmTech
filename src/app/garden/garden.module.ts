import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GardenPage } from './garden.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { GardenPageRoutingModule } from './garden-routing.module';
import { IonicModule } from '@ionic/angular';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    GardenPageRoutingModule
  ],
  declarations: [GardenPage]
})
export class GardenPageModule {}
