import { Component, trigger, state, style, animate, transition } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('movable', [
      state('fixed', style({

      })),
      state('roaming', style({
        'background-color': 'green',
        'left': '90%'
      })),
      transition('* => *', animate('5s 1s ease-in'))
    ])
  ]
})
export class AppComponent {
  title = 'Stock Dashboard';
  moving: string;
  moveIt() {
    console.log('on the move');
    this.moving = 'roaming';
  }
}
