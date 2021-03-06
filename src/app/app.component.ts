import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

import { WindowRef } from './services/window-ref.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('header')
  header: ElementRef;

  toggleHeaderStick = false;

  title = 'Altitude';

  constructor(
    private windowRef: WindowRef,
    private renderer: Renderer2,
    private routeRef: Router
  ) {}

  ngOnInit() {
    this.windowRef.nativeWindow.$('body').vegas({
      delay: 5000,
      transitionDuration: 2000,
      slides: [
        { src: 'assets/images/slides/slide5.jpg' },
        { src: 'assets/images/slides/slide6.jpg' },
        { src: 'assets/images/slides/slide3.jpg' },
        { src: 'assets/images/slides/slide4.jpg' },
        { src: 'assets/images/slides/slide1.jpg' },
        { src: 'assets/images/slides/slide2.jpg' },
        { src: 'assets/images/slides/slide7.jpg' },
      ],
    });

    const bodyWrapper = document.querySelector('.body-wrapper') as Element;

    this.renderer.listen(bodyWrapper, 'scroll', (e: Event) => {
      if (bodyWrapper.scrollTop > 150) {
        this.toggleHeaderStick = true;
      } else if (bodyWrapper.scrollTop < 150) {
        this.toggleHeaderStick = false;
      }
    });

    const contentBox: Element = document.querySelector('main.content');

    this.routeRef.events.subscribe(evt => {
      if (evt instanceof NavigationEnd) {
        bodyWrapper.scrollTop = 0;
      }
    });
  }
}
