import { CartDataRes } from './../interfaces/interfaces';
import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { OrderService } from '../services/order.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartProducts: any[] = [];
  nullStr = 'Empty';
  loading: boolean = true;

  constructor(
    private cartService: CartService,private orderService:OrderService,private router:Router) {
    this.cartService.getCart().subscribe((res) => {
      console.log('cart from db',res)
      this.cartProducts = res.data
      this.loading = false;
    });
  }

  incrementQuantity(item: CartDataRes) {
    item.quantity = (item.quantity || 1) + 1;
    this.cartService.addToCart(item.Restaurant.id, 1).subscribe({
      next:() => {
        console.log('added')
        console.log(this.cartProducts)
      }
    })
  }

  decrementQuantity(item: CartDataRes) {
    if (item.quantity && item.quantity > 1) {
      item.quantity -= 1;
      this.cartService.addToCart(item.Restaurant.id, -1).subscribe({
        next: () => {
          console.log('subtracted');
        }
      });
    } else {
     
      this.removeItem(item, this.cartProducts.indexOf(item));
    }
  }
 
  removeItem(item: CartDataRes, index: number) {
    this.cartProducts.splice(index, 1);
    this.cartService.removeFromCart(item.Restaurant.id).subscribe({
      next: () => {
        console.log('removed');
      }
    });
  }
  
  orderNow() {
    this.orderService.placeOrder(this.cartProducts).subscribe({
      next: (order) => {
       // alert('Order placed successfully:');
        this.router.navigate(['/address'])
      },
      error: (error) => {
        console.error('Error placing order:', error);
      }
    });
  }
}
