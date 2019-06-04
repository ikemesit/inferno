import { Component, OnInit } from '@angular/core';

import { FadeInUp, SwipeInRight } from './where.animation';

@Component({
  selector: 'app-where',
  templateUrl: './where.component.html',
  styleUrls: ['./where.component.scss'],
  animations: [SwipeInRight],
})
export class WhereComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
