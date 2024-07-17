import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { getProducts } from '../mock';
import { Product } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(getProducts());
  }

  getProductById(id: number): Observable<Product> {
    const product = getProductById(id);
    return of(product);
  }
}
