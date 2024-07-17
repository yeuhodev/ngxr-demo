import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ProductState } from '../reducers';

export const selectTodoState = createFeatureSelector<ProductState>('products');

export const selectProducts = createSelector(
  selectTodoState,
  (state: ProductState) => state.products,
);
export const selectLoading = createSelector(
  selectTodoState,
  (state: ProductState) => state.loading,
);
export const selectError = createSelector(
  selectTodoState,
  (state: ProductState) => state.error,
);

