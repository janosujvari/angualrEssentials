import { Component } from '@angular/core';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  text = 'this is a text!';
  loadState = 'loading';

  onButtonClick() {
    this.loadState = 'finished';
  }
}
