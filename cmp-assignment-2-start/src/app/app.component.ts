import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  intArr = ['Apples', 'Bananas', 'Cherries'];

  itemAdded(item) {
    this.intArr.push(item);

    console.log('this.intArr ------> \n', this.intArr);
  }
}
