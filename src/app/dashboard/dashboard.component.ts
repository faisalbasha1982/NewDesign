import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  today:Date = new Date();
  public greetings:string = this.getGreetings() + ",";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }
  
  ngOnInit() {
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

  logout() {
    this.router.navigate(["/signin"]);
  }


}
