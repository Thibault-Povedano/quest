import { Component, OnInit } from '@angular/core';
import { CocktailService } from './Cocktail.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'quest';
  private service: CocktailService;

  constructor(param_service: CocktailService) {
    this.service = param_service;
  }
}
