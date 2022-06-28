import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from '../models/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  modelUser: User =new User("","","","");


  onSubmit(userForm:User) :void{
    console.log("form",this.modelUser);

  }

  constructor() { }

  ngOnInit(): void {
  }

}
