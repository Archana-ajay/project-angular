import { Component ,OnInit} from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts: any[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartProducts = this.cartService.getCart();
  }
  removeItemFromCart(index: number) {
    this.cartService.removeFromCart(index);
  }
  // addToCart(item: any) {
  //   const existingItem = this.cartService.getCartItem(item);
  //   if (existingItem) {
  //     existingItem.quantity += 1; // Increase quantity
  //   } else {
  //     item.quantity = 1; // Initialize quantity
  //     this.cartService.addToCart(item);
  //   }
  // }
}
