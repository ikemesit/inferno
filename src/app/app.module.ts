import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseComponent } from './base/base.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { WindowRef } from './services/window-ref.service';
import { TicketsComponent } from './tickets/tickets.component';
import { WhatComponent } from './what/what.component';
import { WhereComponent } from './where/where.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WhatComponent,
    WhereComponent,
    HeaderComponent,
    FooterComponent,
    TicketsComponent,
    BaseComponent,
    FaqComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AccordionModule.forRoot(),
    BsDropdownModule.forRoot(),
  ],
  providers: [WindowRef],
  bootstrap: [AppComponent],
})
export class AppModule {}
