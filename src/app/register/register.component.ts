import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private store: Store<any>,
  ) {}

  counter;

  ngOnInit() {
    this.store.dispatch({
      type: 'INCREMENT'
    });

    this.counter = this.store.select('register');
  }

  clickThing() {
    this.store.dispatch({
      type: 'INCREMENT'
    });
  }

}
