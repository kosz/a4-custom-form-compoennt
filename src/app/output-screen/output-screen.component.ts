import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-output-screen',
  templateUrl: './output-screen.component.html',
  styleUrls: ['./output-screen.component.css']
})
export class OutputScreenComponent implements OnInit {

  registerSlice;

  constructor(
    private store: Store<any>,
  ) { }

  ngOnInit() {
    this.registerSlice = this.store.select('register');
  }

}
