import { Component, OnInit } from '@angular/core';
import { FormBuilder, RequiredValidator } from '@angular/forms';
import { emailValidator } from './email.validator';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  result: string[] = [];

  userForm = this.userFormBuilder.group({
    username: [''],
    credentials: this.userFormBuilder.group({
      email: ['', [emailValidator]],
      password: [''],
    }),
    address: this.userFormBuilder.group({
      street: [''],
      city: [''],
      zipCode: ['']
    }),
  });

  constructor(private userFormBuilder: FormBuilder) { }

  onSubmit() {
    console.log(this.userForm.value)
  };

  ngOnInit(): void {
    console.log()
  };

}
