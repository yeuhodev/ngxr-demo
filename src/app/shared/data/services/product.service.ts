import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { getProductById, getProducts } from '../mock';
import { ProductModel } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  getProducts(): Observable<ProductModel[]> {
    return of(getProducts());
  }

  getProductById(id: number): Observable<ProductModel> {
    const product = getProductById(id);
    return of(product);
  }
}
