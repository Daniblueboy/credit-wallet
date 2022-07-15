import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwaitingDisbursementComponent } from './awaiting-disbursement.component';

describe('AwaitingDisbursementComponent', () => {
  let component: AwaitingDisbursementComponent;
  let fixture: ComponentFixture<AwaitingDisbursementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwaitingDisbursementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AwaitingDisbursementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
