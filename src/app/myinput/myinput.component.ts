import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-myinput',
  templateUrl: './myinput.component.html',
  styleUrls: ['./myinput.component.css']
})
export class MyinputComponent implements OnInit {

  @Input() formControl: FormControl;
  @Input() errorInfo: any;
  @Input() lblTxt: string;
  constructor() { }

  ngOnInit() {
  }

}
