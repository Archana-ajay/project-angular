import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MasterService } from '../services/master.service';
import { switchMap } from 'rxjs/operators';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})





export class ItemsComponent{
  items:any[]=[];
  filteredItems:any[]=[];
  cartProducts: any[] = [];
  isCartOpen: boolean = false;
constructor(private activate:ActivatedRoute,private master:MasterService,private cartservice:CartService){
  this.cartProducts = this.cartservice.cart;
  //this.selectedCategory = this.categories[0];
this.activate.params.subscribe((res:any)=>{
  debugger;
  this.loadFoodItemsByCategory()
  
})
}
// ngOnInit(): void {
//   this.loadFoodItemsByCategory()
// }
loadFoodItemsByCategory() {
  this.master.getItemsByRestaBYCategoryName().subscribe((res: any)=>{
   
    
    this.items = res.data;
    const categoryName = (this.activate.snapshot.params['categoryname']);
    this.filteredItems=this.items.filter(item => item.categoryName === categoryName)
    //console.log((this.filteredItems).length);
    
  })
}
addItemToCart(product:any){
      
  this.cartservice.addToCart(product)
  alert("Product added to cart")

}

}