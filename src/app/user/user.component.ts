import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {


  userForm = this.fb.group({
    username: ['']
});

  mail = new FormControl('');
  password = new FormControl('');
  street = new FormControl('');
  city = new FormControl('');
  zipCode = new FormControl('');

  constructor(private fb: FormBuilder) { }

  // subscription() {
  //   this.user.push(new User(this.userName.value!,
  //     this.mail.value!,
  //     this.password.value!,
  //     this.street.value!,
  //     this.city.value!,
  //     this.zipCode.value!))
  //   console.log(this.user)
  // }

  onSubmit(){
    console.log(this.userForm.value)
  }

  ngOnInit(): void {
    console.log()
  }

}
