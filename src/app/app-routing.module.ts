import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoansComponent } from './loans/loans.component';
import { VerificationComponent } from './verification/verification.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoanDisbursementComponent } from './loan-disbursement/loan-disbursement.component';
import { AwaitingDisbursementComponent } from './awaiting-disbursement/awaiting-disbursement.component';
import { RecoveryNotYetContactedComponent } from './recovery-not-yet-contacted/recovery-not-yet-contacted.component';
import { RecoveryComponent } from './recovery/recovery.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'loans', component: LoansComponent },
  { path: 'verification', component: VerificationComponent },
  { path: 'loan-disbursement', component: LoanDisbursementComponent },
  { path: 'awaiting-disbursement', component: AwaitingDisbursementComponent },
  {
    path: 'recovery-not-yet-contacted',
    component: RecoveryNotYetContactedComponent,
  },
  {
    path: 'recovery',
    component: RecoveryComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    AccordionModule.forRoot(),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
