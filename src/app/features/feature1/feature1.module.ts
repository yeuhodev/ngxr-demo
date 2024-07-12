import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Feature1Component } from './components/feature1/feature1.component';
import { Feature1RoutingModule } from './feature1-routing.module';

@NgModule({
  imports: [
    CommonModule, Feature1RoutingModule
  ],
  declarations: [Feature1Component]
})
export class Feature1Module { }
