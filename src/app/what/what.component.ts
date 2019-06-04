import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FadeInUp, SwipeInRight } from './what.animation';

@Component({
  selector: 'app-what',
  templateUrl: './what.component.html',
  styleUrls: ['./what.component.scss'],
  animations: [FadeInUp, SwipeInRight],
})
export class WhatComponent implements OnInit {
  triggerBGChange = false;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.url.subscribe(res => console.log(res));
  }
}
