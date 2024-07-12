import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Feature2Component } from './components/feature2/feature2.component';

const routes: Routes = [
  {
    path: '',
    component: Feature2Component
  },
  // Các route khác của feature1
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Feature2RoutingModule { }
