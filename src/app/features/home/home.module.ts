import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent, ProductComponent } from './components';

@NgModule({
  imports: [
    CommonModule, HomeRoutingModule
  ],
  declarations: [HomeComponent, ProductComponent]
})
export class HomeModule { }
