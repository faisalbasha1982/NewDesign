import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { DeveloperService } from '../shared/services/developer.service';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {

  supinForm:FormGroup;

  constructor(private route: ActivatedRoute,private router: Router,
    private developerService:DeveloperService) { }

  ngOnInit() {
    this.supinForm = new FormGroup({
      username: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
  });
}

  login() {

    let username:string = this.supinForm.get('username').value;
    let password:string  =  this.supinForm.get('password').value;

    if(username.length !== 0 && password.length !== 0)
        this.router.navigate(["/dashboard"]);
    else{
      alert("username && password required");
    }
  }

}