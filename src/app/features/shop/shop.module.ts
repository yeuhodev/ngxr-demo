import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './components';
import { BannerComponent } from '../../shared/components';

@NgModule({
  imports: [CommonModule, ShopRoutingModule, BannerComponent],
  declarations: [ShopComponent],
})
export class ShopModule {}
