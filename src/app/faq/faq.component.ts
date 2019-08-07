import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
  animations: [
    trigger('fadeInDown', [
      transition('void => *', [
        query(':enter', [
          style({ opacity: 0 }),
          stagger('0.1s', [animate('0.2s ease-in', style({ opacity: 1 }))]),
        ]),
      ]),
      transition(':leave', [
        style({ transform: 'translateY(0)' }),
        animate('0.3s 0s ease-out', style({ transform: 'translateY(-50px)' })),
      ]),
    ]),
  ],
})
export class FaqComponent implements OnInit {
  toggleDate = false;
  oneAtATime = true;

  constructor() {}

  ngOnInit() {}
}
