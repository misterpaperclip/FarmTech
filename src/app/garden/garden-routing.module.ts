import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GardenPage } from './garden.page';

const routes: Routes = [
  {
    path: '',
    component: GardenPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GardenPageRoutingModule {}
