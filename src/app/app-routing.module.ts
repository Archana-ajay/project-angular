import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CategoriesComponent } from './categories/categories.component';
import { ItemsComponent } from './items/items.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { CartComponent } from './cart/cart.component';
import { SignupComponent } from './signup/signup.component';





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
  path:'create-order',component:CreateOrderComponent
},
{
  path:'cart',component:CartComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }