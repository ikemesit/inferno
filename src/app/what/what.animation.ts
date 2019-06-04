import { animate, state, style, transition, trigger } from '@angular/animations';

export const FadeInUp = trigger('fadeInUpTrigger', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(50px)' }),
    animate(
      '0.8s 0.5s ease',
      style({ opacity: 1, transform: 'translateY(0px)' })
    ),
  ]),
]);

export const SwipeInRight = trigger('swipeInTrigger', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(100px)' }),
    animate(
      '0.5s 0.2s ease',
      style({ opacity: 1, transform: 'translateX(0px)' })
    ),
  ]),
  transition(':leave', [
    style({ opacity: 1, transform: 'translateX(0px)' }),
    animate('0.5s ease', style({ opacity: 0, transform: 'translateX(-50px)' })),
  ]),
]);
