import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  private apiUrl = "http://localhost:3000/api/v1"; // Set your API URL here

 
  constructor(private http: HttpClient) {}

  // Create a new address
  postAddress(addressData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/address`, addressData);
  }

  // Get the user's address
  getAddress(): Observable<any> {
    return this.http.get(`${this.apiUrl}/address`);
  }

  // Update an existing address
  updateAddress(addressId: string, addressData: any): Observable<any> {
    return this.http.patch(`${this.apiUrl}/address/${addressId}`, addressData);
  }
}
