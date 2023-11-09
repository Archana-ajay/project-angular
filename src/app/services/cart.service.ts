import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: any[] = [];

 
 
  constructor(private http:HttpClient) { }
  getCartItem(item: any): any {
    return this.cart.find((cartItem) => cartItem.id === item.id);
  }

  

  getAllProducts(){
        return this.http.get("assets/category.json");
  }
  
  getCart(): any[] {
    return this.cart;
  }
  removeFromCart(index: number) {
    if (index >= 0 && index < this.cart.length) {
      this.cart.splice(index, 1);
    }
  }
  addToCart(product:any){
    this.cart.push(product)
}
  
}