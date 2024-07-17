import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ProductModel } from '../../../../shared/models';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { loadProducts } from '../../../../shared/store/actions';
import {
  selectError,
  selectLoading,
  selectProducts,
} from '../../../../shared/store/selectors';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopComponent implements OnInit {
  bannerInfo: { title: string; description: string; backgroundUrl: string } = {
    title: 'Shop',
    description: `The attractions of ceramics lie partly in its contradictions. It is both difficult and easy, with an element beyond our control. It is both extremely fragile and durable. Like 'Sumi' ink painting, it does not lend itself to erasures and indecision.`,
    backgroundUrl: '/assets/images/shop-banner.jpg',
  };

  products$: Observable<ProductModel[]>;
  loading$: Observable<boolean>;
  error$: Observable<string>;

  constructor(private store: Store) {
    this.products$ = this.store.pipe(select(selectProducts));
    this.loading$ = this.store.pipe(select(selectLoading));
    this.error$ = this.store.pipe(select(selectError));
  }

  ngOnInit(): void {
    this.store.dispatch(loadProducts());
  }
}
