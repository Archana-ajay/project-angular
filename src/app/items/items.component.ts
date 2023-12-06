import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MasterService } from '../services/master.service';
import { CartService } from '../services/cart.service';
import { AuthService } from '../services/auth.service';
import { RestaurantData } from '../interfaces/interfaces';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})


export class ItemsComponent {
  items: any[] = [];
  filteredItems: any[] = [];
  cartObj: any[] = [];


  constructor(private router:Router,private activate: ActivatedRoute, private master: MasterService,  private authService: AuthService,private cartService: CartService) {
    this.activate.params.subscribe((res: any) => {
      this.loadFoodItemsByCategory()

    })
  }

  loadFoodItemsByCategory() {
    this.master.getItemsByRestaBYCategoryName().subscribe((res: any) => {
      this.items = res.data;
      const categoryName = (this.activate.snapshot.params['categoryname']);
      this.filteredItems = this.items.filter(item => item.categoryName === categoryName)
    })
  }

  addItemToCart(restaurant: RestaurantData) {
    this.cartService.addToCart(restaurant.id, 1).subscribe({
      next: (res) => {
        console.log(res)
      alert("Item added to cart")
      },
      error: (err) => {
        alert('Unable to add. Please login')
        this.router.navigate(['/login']);
      }
    })
  }
}