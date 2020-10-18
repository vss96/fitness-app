import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountCreatorStepperComponent } from './account-creator-stepper.component';

describe('AccountCreatorStepperComponent', () => {
  let component: AccountCreatorStepperComponent;
  let fixture: ComponentFixture<AccountCreatorStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountCreatorStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountCreatorStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
