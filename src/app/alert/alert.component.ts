import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  increment: any;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.increment = this.store.select('increment');
  }

  doIncrement() {
    this.store.dispatch({
      type: 'INCREMENT'
    });
  }

  doDecrement() {
    this.store.dispatch({
      type: 'DECREMENT'
    });
  }
}
