import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-forms.html',
  styleUrl: './reactive-forms.css',
})
export class ReactiveForms {
  myForm: FormGroup;
  isNameRequired = true;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
    });
  }

  toggleValidation() {
    const control = this.myForm.get('name');

    if (control) {
      if (this.isNameRequired) {
        control.clearValidators();
      } else {
        control.setValidators(Validators.required);
      }

      this.isNameRequired = !this.isNameRequired; // Toggle the flag
      control.updateValueAndValidity();
    }
  }

  userObject = {
    id: 0,
    name: '',
    username: '',
    email: '',
    password: '',
    city: '',
    state: '',
  };
  userForm = new FormGroup({
    id: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    city: new FormControl(''),
    state: new FormControl(''),
  });

  get id() {
    return this.userForm.controls['id'];
  }
  get name() {
    return this.userForm.controls['name'];
  }
  get email() {
    return this.userForm.controls['email'];
  }
  get username() {
    return this.userForm.controls['username'];
  }
  get password() {
    return this.userForm.controls['password'];
  }
  submitForm() {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched(); // show all errors on submit attempt
      return;
    }
    console.log(this.userForm.value);
    alert('Form submitted successfully!');
  }

  resetForm() {
    this.userForm.reset();
  }
}
