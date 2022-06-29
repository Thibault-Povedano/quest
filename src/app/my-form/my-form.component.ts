import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order.models';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss']
})
export class MyFormComponent implements OnInit {

  model: Order = new Order("", 0, new Date(), "");

  constructor() { }

  onSubmit() {
    // form submitted
    console.log(this.model);
  }

  ngOnInit(): void {
  }

}
