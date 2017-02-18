import { Component, trigger, state } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('movable', [
      state('fixed', style({

      })),
      state('roaming', style({

      }))
    ])
  ]
})
export class AppComponent {
  title = 'app works!';
  movable: string = 'fixed';
  moveIt() {
    console.log('moving');
  }
}
