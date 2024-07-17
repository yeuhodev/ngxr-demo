import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'shop',
    loadChildren: () =>
      import('./features/shop/shop.module').then(
        (m) => m.ShopModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./features/home/home.module').then(
        (m) => m.HomeModule
      ),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
