import { Component, OnInit } from '@angular/core';
import { 
  FormControl,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})
export class MyformComponent implements OnInit {

  myForm = new FormGroup ({
    name: new FormControl()
  });

  constructor() { }

  ngOnInit() {

  }

}
