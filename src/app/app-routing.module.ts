import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CategoriesComponent } from './categories/categories.component';
import { ItemsComponent } from './items/items.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    component:CategoriesComponent
  },
{
  path:'login',component:LoginComponent
},
{
  path:'signup',component:SignUpComponent
},
{
  path:'foodCategory',component:CategoriesComponent
},
{
  path:'restaurant-items/:categoryname',component:ItemsComponent
},
{
  path:'create-order',component:CreateOrderComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
