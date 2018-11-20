import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Product, Item } from '../models/product.interface';

@Injectable()
export class StockInventoryService {
  constructor(
    private http: HttpClient
  ) {}

  getCartItems(): Observable<Item[]> {
    return this.http
      .get<Item[]>('/api/cart')
      .pipe(
        catchError((error: any) => Observable.throw(error.json()))
      );
  }

  getProducts(): Observable<Product[]> {
    return this.http
      .get<Product[]>('/api/products')
      .pipe(
        catchError((error: any) => Observable.throw(error.json()))
      );
  }
}
