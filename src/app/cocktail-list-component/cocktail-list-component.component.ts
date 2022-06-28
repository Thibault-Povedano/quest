import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../CocktailService.service';
import { Cocktail } from '../models/cocktail.model';


@Component({
  selector: 'app-cocktail-list-component',
  templateUrl: './cocktail-list-component.component.html',
  styleUrls: ['./cocktail-list-component.component.scss']
})
export class CocktailListComponent implements OnInit {

  cocktails: Cocktail[]= []

  constructor(public CocktailService: CocktailService,) { }

  ngOnInit(): void {
    this.cocktails = [... this.CocktailService.getCocktails()]
  }

}
