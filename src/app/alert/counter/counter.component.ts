import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counterSlice: any;
  backendSlice: any;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.counterSlice = this.store.select('counter'); 
    this.backendSlice = this.store.select('backend'); 
  }

  increment() {
    this.store.dispatch({
      type: 'INCREMENT'
    });
  }

  decrement() {
    this.store.dispatch({
      type: 'DECREMENT'
    });
  }

  loadData() {
    this.store.dispatch({
      type: 'REQUEST'
    });
  }

}
