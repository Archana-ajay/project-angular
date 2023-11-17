import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'http://localhost:3000/api/v1';
  constructor(private http: HttpClient) {}

  getCart(): Observable<any> {
    return this.http.get(`${this.apiUrl}/cart`);
  }

  addToCart(restaurantID: string, quantity: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/cart`, {restaurantID, quantity});
  }

  removeFromCart(restaurantID: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/remove/${restaurantID}`);
  }

  
}
