import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CategoriesComponent } from './categories/categories.component';
import { ItemsComponent } from './items/items.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { SignupComponent } from './signup/signup.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CategoriesComponent,
    ItemsComponent,
    CreateOrderComponent,
    CartComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }