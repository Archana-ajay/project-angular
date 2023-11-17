import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient) { }
  getAllFoodCategory(){
    return this.http.get("http://localhost:3000/api/v1/foods");
  };
  getItemsByRestaBYCategoryName() {
    return this.http.get("http://localhost:3000/api/v1/foods/restaurants")
  }
}