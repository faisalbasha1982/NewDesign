import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  @Input() public CountryFormData;
  @Output() public childEvent = new EventEmitter();

  public oldCountryFormData;
  public id = 'ddl_legalform';
  public currentlanguage = 'nl';
  public errorMsg;
  public datas: any = ['developer','designer'];
  public selectedIndexvariable:any;
  public selectedString: string;
  // tslint:disable-next-line: variable-name

  private _selectedValue: any; private _selectedIndex: any = 0; private _value: any;
  set selectedValue(value: any) { this._selectedValue = value; }
  get selectedValue(): any { return this._selectedValue; }
  set selectedIndex(value: number) { this._selectedIndex = value; this.value = this.datas[this.selectedIndex]; }
  get selectedIndex(): number { return this._selectedIndex; }
  set value(value: any) { this._value = value; }
  get value(): any { return this._value; }
  resetToInitValue() { this.value = this.selectedValue; }

  SetInitialValue() {
    if (this.selectedValue === undefined) {
      this.selectedValue = this.datas[this._selectedIndex];
    }
  }
  constructor() { }

  ngOnInit() {
  }

  onChange($event) {

  }

}
