import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss'],
  animations: [
    trigger('fadeInDown', [
      transition(':enter', [
        query('.ticket-card', [
          style({ transform: 'translateY(-20px)', opacity: 0 }),
          stagger('0.3s', [
            animate(
              '0.4s ease-in',
              style({ transform: 'translateY(0)', opacity: 1 })
            ),
          ]),
        ]),
      ]),
      transition(':leave', [
        style({ transform: 'translateY(0)' }),
        animate('0.3s 0s ease-out', style({ transform: 'translateY(-20px)' })),
      ]),
    ]),
  ],
})
export class TicketsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
