import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoansComponent } from './loans/loans.component';
import { VerificationComponent } from './verification/verification.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'loans', component: LoansComponent },
  { path: 'verification', component: VerificationComponent },
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
