import { Component, OnInit } from '@angular/core';
import { 
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})
export class MyformComponent implements OnInit {

  myForm: FormGroup;

  createForm() {
    this.myForm = this.fb.group({
      name: ['', Validators.required ]
    });
  }

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {

  }

}
