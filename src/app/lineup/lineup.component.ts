import { Component, OnInit } from '@angular/core';

import { FadeInUp, SwipeInRight } from './lineup.animation';

@Component({
  selector: 'app-lineup',
  templateUrl: './lineup.component.html',
  styleUrls: ['./lineup.component.scss'],
  animations: [FadeInUp, SwipeInRight],
})
export class LineupComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
