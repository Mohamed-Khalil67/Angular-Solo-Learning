import { JsonPipe } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-master',
  imports: [FormsModule],
  templateUrl: './user-master.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './user-master.css',
})
export class UserMaster {
  userObject = {
    id: 0,
    name: '',
    username: '',
    email: '',
    password: '',
    city: '',
    state: '',
  };

  resetForm() {
    this.userObject = {
      id: 0,
      name: '',
      username: '',
      email: '',
      password: '',
      city: '',
      state: '',
    };
  }
  submitForm(form: NgForm) {
    console.log(this.userObject);
    if (form.invalid) return; // block submission
  }
}
