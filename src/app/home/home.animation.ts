import { animate, state, style, transition, trigger } from '@angular/animations';

export const FadeInUp = trigger('fadeInUpTrigger', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(80px)' }),
    animate(
      '0.8s 0.5s ease',
      style({ opacity: 1, transform: 'translateY(0px)' })
    ),
  ]),
]);

export const FadeInUp2 = trigger('fadeInUpTrigger2', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(80px)' }),
    animate(
      '0.8s 1s ease',
      style({ opacity: 1, transform: 'translateY(0px)' })
    ),
  ]),
]);

export const SwipeInRight = trigger('swipeInTrigger', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(100px)' }),
    animate(
      '0.5s 1.2s ease',
      style({ opacity: 1, transform: 'translateX(0px)' })
    ),
  ]),
]);

export const FadeIn = trigger('fadeInTrigger', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('0.8s 1s ease', style({ opacity: 1 })),
  ]),
]);
