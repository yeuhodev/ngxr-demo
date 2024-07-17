import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './components';

@NgModule({
  imports: [
    CommonModule, ShopRoutingModule
  ],
  declarations: [ShopComponent]
})
export class ShopModule { }
