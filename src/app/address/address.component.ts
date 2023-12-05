import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressService } from '../services/address.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent  implements OnInit {
  addressForm: FormGroup;
  isSubmitted = false;
  existingAddress: any;

  constructor(
    private formBuilder: FormBuilder,
    private router:Router,
    private route: ActivatedRoute,
    private addressService: AddressService
    )  {
      this.addressForm = this.formBuilder.group({
        address: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
        city: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25), Validators.pattern(/^[a-zA-Z ]*$/)]],
        state: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25), Validators.pattern(/^[a-zA-Z ]*$/)]],
        postalCode: ['', [Validators.required]],
        country: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25), Validators.pattern(/^[a-zA-Z ]*$/)]],
      });
    }
    ngOnInit() {
      this.addressService.getAddress().subscribe(
        (response: any) => {
          this.existingAddress = response.Address; 
    
        
          if (this.existingAddress) {
            this.populateFormWithAddress(this.existingAddress);
          }
        },
        (error: any) => {
          console.error('Error fetching existing address:', error);
        }
      );
    }

  get fc() {
    return this.addressForm.controls;
  }

  submitAddress() {
    this.isSubmitted = true;
    console.log("hi");
    console.log('address',this.addressForm.controls.address.errors)
    console.log('city',this.addressForm.controls.city.errors)
    console.log('state',this.addressForm.controls.state.errors)
    console.log('postalCode',this.addressForm.controls.postalCode.errors)
    console.log('country',this.addressForm.controls.country.errors)
    if (!this.addressForm.valid) {
      return;
    }
    console.log("hello");
    

    const addressData = this.addressForm.value;

    if (this.existingAddress) {
      
      this.addressService.updateAddress(this.existingAddress.id, addressData).subscribe(
        (response) => {
          alert("address updated")
          this.router.navigate(["order"])
          console.log('Address updated:', response);
          
        },
        (error:any) => {
          console.error('Error updating address:', error);
          
        }
      );
    } else {
      // If no existing address is present, create a new one
      this.addressService.postAddress(addressData).subscribe(
        (response) => {
          alert("order confirmed")
          this.router.navigate(["order"])
          console.log('Address saved:', response);
          
        },
        (error:any) => {
          console.error('Error saving address:', error);
          
        }
      );
    }
  }

  populateFormWithAddress(address: any) {
    this.addressForm.patchValue({
      address: address.address,
      city: address.city,
      state: address.state,
      postalCode: address.postalCode,
      country: address.country,
    });
  }
  limitLength(event: Event): void {
    const input = event.target as HTMLInputElement;
    const inputValue = input.value;
    if (inputValue.length > 12) {
      input.value = inputValue.slice(0, 25);
    }
  }
  limitPostalLength(event: Event): void {
    const input = event.target as HTMLInputElement;
    const inputValue = input.value;
    if (inputValue.length > 10) {
      input.value = inputValue.slice(0, 10);
    }
  }
  checkInput(event: KeyboardEvent) {
    const key = event.keyCode
    return (
      (key >= 65 && key <=90) ||
      (key >= 97 && key <= 122) ||
      key === 8 ||
      key === 32
    )
  }


}
