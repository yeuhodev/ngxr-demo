import { createReducer, on } from '@ngrx/store';
import { ProductModel } from '../../models';
import {
  loadProducts,
  loadProductsFailure,
  loadProductsSuccess,
} from '../actions/product.actions';

export interface ProductState {
  products: ProductModel[];
  loading: boolean;
  error: string;
}

export const initialState: ProductState = {
  products: [],
  loading: false,
  error: '',
};

const _productReducer = createReducer(
  initialState,
  on(loadProducts, (state) => ({ ...state, loading: true })),
  on(loadProductsSuccess, (state, { products }) => ({
    ...state,
    loading: false,
    products,
  })),
  on(loadProductsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
);

export function productReducer(state, action) {
  return _productReducer(state, action);
}
