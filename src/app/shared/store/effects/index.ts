import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ProductService } from '../../data/services';
import {
  loadProducts,
  loadProductsFailure,
  loadProductsSuccess,
} from '../actions';

@Injectable()
export class ProductsEffects {
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProducts),
      mergeMap(() =>
        this.productService.getProducts().pipe(
          map((products) => loadProductsSuccess({ products })),
          catchError((error) => of(loadProductsFailure({ error }))),
        ),
      ),
    ),
  );

  constructor(
    private actions$: Actions,
    private productService: ProductService,
  ) {}
}
