import { HttpClient } from '@angular/common/http';
import { CompilerFactory, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coffee } from '../models/coffee';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  dataSource: string = "http://localhost:3000/Coffee";


  getAllProducts(): Observable<Coffee[]> {
    return this.http.get<Coffee[]>(this.dataSource);
  }

  getProductById(num: number): Observable<Coffee> {
    return this.http.get<Coffee>(this.dataSource + "/" + num);
  }

  editProductById(num: number, edittedCoffee: Coffee): Observable<Coffee> {
    return this.http.put<Coffee>(this.dataSource + "/" + num, edittedCoffee);
  }

  createNewCoffee(newCoffee: Coffee): Observable<Coffee> {
    return this.http.post<Coffee>(this.dataSource, newCoffee);
  }

  deleteCoffeeById(num: number): Observable<Coffee> {
    return this.http.delete<Coffee>(this.dataSource + "/" + num);
  }

  sortPriceAscend(): Observable<Coffee[]> {
    return this.http.get<Coffee[]>(this.dataSource + "?_sort=price");
  }

  sortPriceDesc(): Observable<Coffee[]> {
    return this.http.get<Coffee[]>(this.dataSource + "?_sort=price&_order=desc");
  }
}
