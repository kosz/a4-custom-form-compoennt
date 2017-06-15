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
  errorMap = errorMap;

  createForm() {
    this.myForm = this.fb.group({
      name: ['', [ Validators.required, Validators.minLength(4) ] ],
      newName: ['', [ Validators.required, Validators.maxLength(10) ] ]
    });
  }

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {

  }

}

const errorMap = {
  name: { 
    required: 'This Field is Rqrd',
    minlength: 'Should be bigger than 4'
  }, 
  newName: {
    required: 'This Field should also exist',
    maxlength: 'Not bigger than 10 please'
  }
};
