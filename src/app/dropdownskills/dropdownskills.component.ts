import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdownskills',
  templateUrl: './dropdownskills.component.html',
  styleUrls: ['./dropdownskills.component.css']
})
export class DropdownskillsComponent implements OnInit {

  public datas: any = ['developer','software', 'web designer'];

  constructor() { }

  ngOnInit() {
  }

}
