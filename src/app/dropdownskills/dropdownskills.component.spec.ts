import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownskillsComponent } from './dropdownskills.component';

describe('DropdownskillsComponent', () => {
  let component: DropdownskillsComponent;
  let fixture: ComponentFixture<DropdownskillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownskillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
