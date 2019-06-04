import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('flyInOut', [
      transition(':enter', [
        style({ transform: 'translateY(-50px)', opacity: 0 }),
        animate(
          '0.2s 0.2s ease-in',
          style({ transform: 'translateY(0)', opacity: 1 })
        ),
      ]),
      transition(':leave', [
        style({ transform: 'translateY(0)' }),
        animate('0.3s 0s ease-out', style({ transform: 'translateY(-100px)' })),
      ]),
    ]),
  ],
})
export class HeaderComponent implements OnInit {
  @Input()
  toggleSticky;

  constructor() {}

  ngOnInit() {}

  getScrollPosition(event: Event): void {}
}
