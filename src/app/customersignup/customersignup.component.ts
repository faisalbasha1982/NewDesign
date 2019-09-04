import { Component, OnInit, Input, Output } from '@angular/core';
import { FormGroup,FormControl,Validators, Form } from '@angular/forms';
import { parseTwoDigitYear } from 'ngx-bootstrap/chronos/units/year';
import { DATE } from 'ngx-bootstrap/chronos/units/constants';

@Component({
  selector: 'app-customersignup',
  templateUrl: './customersignup.component.html',
  styleUrls: ['./customersignup.component.css']
})
export class CustomersignupComponent implements OnInit {

  supinForm:FormGroup;
  public greetings:string = this.getGreetings() + "!";

  constructor() { 

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
      password: new FormControl(''),
      email: new FormControl(''),
      orders: new FormControl('')
    });
  }


  private submit() {
  }

}
