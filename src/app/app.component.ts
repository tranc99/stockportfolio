import { Component, trigger, state, style } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('movable', [
      state('fixed', style({

      })),
      state('roaming', style({
        'background-color':'green'
      }))
    ])
  ]
})
export class AppComponent {
  title = 'app works!';
  moving: string;
  moveIt() {
    console.log('on the move');
    this.moving = 'roaming';
  }
}
