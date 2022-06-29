import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: User[] = [];

  userName = new FormControl('');
  mail = new FormControl('');
  password = new FormControl('');
  street = new FormControl('');
  city = new FormControl('');
  zipCode = new FormControl('');

  subscription() {
    this.user.push(new User(this.userName.value!,
      this.mail.value!,
      this.password.value!,
      this.street.value!,
      this.city.value!,
      this.zipCode.value!))
    console.log(this.user)
  }

  constructor() { }

  ngOnInit(): void {
    console.log()
  }

}
