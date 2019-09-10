import { Component, OnInit, Input, Output } from '@angular/core';
import { FormGroup,FormControl,Validators, Form } from '@angular/forms';
import { parseTwoDigitYear } from 'ngx-bootstrap/chronos/units/year';
import { DATE } from 'ngx-bootstrap/chronos/units/constants';
import { Customer } from '../shared/models';
import { CustomerService } from '../shared/services/customer.service';

@Component({
  selector: 'app-customersignup',
  templateUrl: './customersignup.component.html',
  styleUrls: ['./customersignup.component.css']
})
export class CustomersignupComponent implements OnInit {

  supinForm:FormGroup;
  public greetings:string = this.getGreetings() + "!";
  public datas: any = ['developer','software', 'web designer'];
  public selectedIndex = 0;

  constructor(private customerService:CustomerService) { 

  }

  getGreetings() {

    let date: Date = new Date();  

    let hours:number = date.getHours();
    let minutes: number = date.getMinutes();

    console.log("day="+hours);

    if(hours >=0 && hours <=12)
      return "Good Morning";
    else 
       if(hours > 12 && hours <17)
        return "Good Afternoon";
       else 
         return "Good Evening";

    return "";

  }

  ngOnInit() {
    this.supinForm = new FormGroup({
      firstname: new FormControl('',Validators.required),
      lastname: new FormControl(''),
      company: new FormControl(''),
      country: new FormControl(''),
      password: new FormControl(''),
      email: new FormControl(''),
      orders: new FormControl('')
    });
  }

  onChange($event) {

  }
  private submit() {

    let signupDetails:any = new Customer();

    signupDetails.Customerid = 0;
    signupDetails.Firstname  = this.supinForm.get('firstname').value;
    signupDetails.Lastname = this.supinForm.get('lastname').value;
    signupDetails.Companyname = this.supinForm.get('company').value;
    signupDetails.CountryName = this.supinForm.get('CountryName').value;
    signupDetails.Userid = 0;
    signupDetails.Termsandcondition = false;
    signupDetails.Termsofservice = false;
    
    this.customerService.signupCustomer(signupDetails);
  }

}
