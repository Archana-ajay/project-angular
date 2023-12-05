import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CategoriesComponent } from './categories/categories.component';
import { ItemsComponent } from './items/items.component';
import { CartComponent } from './cart/cart.component';
import { SignupComponent } from './signup/signup.component';
import { OrderComponent } from './order/order.component';
import { AddressComponent } from './address/address.component';





const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    component:CategoriesComponent
  },
  {
    path:'signup',component:SignupComponent
  },
{
  path:'login',component:LoginComponent
},
{
  path:'foodCategory',component:CategoriesComponent
},
{
  path:'restaurant-items/:categoryname',component:ItemsComponent
},
{
  path:'cart',component:CartComponent
},
{
  path:'order',component:OrderComponent
},
{
  path:'address',component:AddressComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }