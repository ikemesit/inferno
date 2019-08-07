import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { LineupComponent } from './lineup/lineup.component';
import { TicketsComponent } from './tickets/tickets.component';
import { WhatComponent } from './what/what.component';
import { WhereComponent } from './where/where.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'what',
    component: WhatComponent,
  },
  {
    path: 'where',
    component: WhereComponent,
  },
  {
    path: 'tickets',
    component: TicketsComponent,
  },
  {
    path: 'faq',
    component: FaqComponent,
  },
  {
    path: 'lineup',
    component: LineupComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
