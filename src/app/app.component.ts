import { Component, trigger, state } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    
  ]
})
export class AppComponent {
  title = 'app works!';
  moveIt() {
    console.log('moving');
  }
}
