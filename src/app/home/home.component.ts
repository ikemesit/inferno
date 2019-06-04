import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { WindowRef } from '../services/window-ref.service';
import { FadeIn, FadeInUp, FadeInUp2, SwipeInRight } from './home.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [FadeInUp, SwipeInRight, FadeIn, FadeInUp2],
})
export class HomeComponent implements OnInit {
  constructor(private route: ActivatedRoute, private window: WindowRef) {}

  ngOnInit() {
    this.route.url.subscribe(res => {
      this.window.nativeWindow.document.scrollTo({
        top: 0,
        left: this.window.nativeWindow.innerHeight,
        behavior: 'smooth',
      });
    });
  }
}
