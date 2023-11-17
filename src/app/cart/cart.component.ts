import { Component ,OnInit} from '@angular/core';
import { CartService } from '../services/cart.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartProducts: any[] = [];
  nullStr = 'Empty'

  constructor(
    private cartService: CartService) {
    this.cartService.getCart().subscribe((res) => {
      console.log('cart from db',res)
      this.cartProducts = res.data.items
    });
  }

  incrementQuantity(item: any) {
    item.quantity = (item.quantity || 1) + 1;
    this.cartService.addToCart(item.restaurantID._id, 1).subscribe({
      next:() => {
        console.log('added')
        console.log(this.cartProducts)
      }
    })
  }

  decrementQuantity(item: any) {
    if (item.quantity && item.quantity > 1) {
      item.quantity -= 1;
      this.cartService.addToCart(item.restaurantID._id, -1).subscribe({
        next: () => {
          console.log('subtracted');
        }
      });
    } else {
      // Remove the item if quantity becomes zero
      this.removeItem(item, this.cartProducts.indexOf(item));
    }
  }
 
  removeItem(item: any, index: number) {
    this.cartProducts.splice(index, 1);
    this.cartService.removeFromCart(item.restaurantID._id).subscribe({
      next: () => {
        console.log('removed');
      }
    });
  }
}
