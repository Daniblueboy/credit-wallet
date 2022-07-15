import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HeaderComponent } from './shared/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { ChartComponent } from './shared/chart/chart.component';
import { LoansComponent } from './loans/loans.component';
import { VerificationComponent } from './verification/verification.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    HeaderComponent,
    ChartComponent,
    LoansComponent,
    VerificationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule.forRoot(),
    BrowserAnimationsModule,
    MatExpansionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
