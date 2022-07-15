import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoveryNotYetContactedComponent } from './recovery-not-yet-contacted.component';

describe('RecoveryNotYetContactedComponent', () => {
  let component: RecoveryNotYetContactedComponent;
  let fixture: ComponentFixture<RecoveryNotYetContactedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecoveryNotYetContactedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoveryNotYetContactedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
