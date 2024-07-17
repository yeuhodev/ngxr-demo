import { createAction, props } from '@ngrx/store';
import { ProductModel } from '../../models';

export const loadProducts = createAction('[Product] Load Products');
export const loadProductsSuccess = createAction(
  '[Product] Load Products Success',
  props<{ products: ProductModel[] }>(),
);
export const loadProductsFailure = createAction(
  '[Product] Load Products Failure',
  props<{ error: string }>(),
);
