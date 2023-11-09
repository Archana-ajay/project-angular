import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient) { }
  getAllFoodCategory(){
    return this.http.get("assets/category.json");
  }
  getItemsByRestaBYCategoryName() {
    return this.http.get("assets/category-by-restaurant.json")
  }
}