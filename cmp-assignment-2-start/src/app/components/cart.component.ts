import { Component,
         Input,
        Output,
        EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  item: string;
  @Input() items = [];

  @Output() itemAdded = new EventEmitter<string>();

  onButtonClick() {
    this.itemAdded.emit(this.item);
    // clean up
    this.item = null;
  }
}
