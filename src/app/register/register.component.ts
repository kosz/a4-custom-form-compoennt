import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { 
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  errorMap = errorMap;

  private createForm() {
    this.registerForm = this.fb.group({
      username: ['', [ Validators.required ] ],
      email: ['', [ Validators.required ] ],
    });
  }

  constructor(
    private store: Store<any>,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  registerState;

  ngOnInit() {
    this.registerState = this.store.select('register');
  }

  saveForm() {
    this.store.dispatch({
      type: 'REGISTER_SAVE',
      payload: this.registerForm.value
    });
  }

}

const errorMap = {
  username: {
    required: 'Enter a user name plz'
  },
  email: {
    required: 'Please enter email'
  }
}
