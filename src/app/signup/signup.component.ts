import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  supinform:FormGroup;
  orders = [
    { id: 100, name: 'I agree to the General terms and conditions' },
    { id: 200, name: 'I agree to the Terms of service' },
  ];

  constructor() { 

  }

  ngOnInit() {
    this.supinform = new FormGroup({
      firstname: new FormControl('',Validators.required),
      lastname: new FormControl(''),
      password: new FormControl(''),
      email: new FormControl(''),
      orders: new FormArray([])
    });

    this.addCheckboxes();

  }

  private addCheckboxes() {
    this.orders.map((o, i) => {
      const control = new FormControl(i === 0); // if first item set to true, else false
      (this.supinform.controls.orders as FormArray).push(control);
    });
  }

  private submit() {
    
    const selectedOrderIds = this.supinform.value.orders
    .map((v, i) => v ? this.orders[i].id : null)
    .filter(v => v !== null);

    console.log(selectedOrderIds);

  }

}
