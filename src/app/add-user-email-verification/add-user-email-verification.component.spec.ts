import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserEmailVerificationComponent } from './add-user-email-verification.component';

describe('AddUserEmailVerificationComponent', () => {
  let component: AddUserEmailVerificationComponent;
  let fixture: ComponentFixture<AddUserEmailVerificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUserEmailVerificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserEmailVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
