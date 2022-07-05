import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../Cocktail.service';
import { Cocktail } from '../models/cocktail.model';


@Component({
  selector: 'app-cocktail-list-component',
  templateUrl: './cocktail-list-component.component.html',
  styleUrls: ['./cocktail-list-component.component.scss']
})
export class CocktailListComponent implements OnInit {

  cocktails: Cocktail[]= []


  constructor(public cocktailService: CocktailService,) { }

  ngOnInit(): void {
    //souscrire à l'observable
          this.cocktailService.getCocktails().subscribe(
            (cocktailsList: Cocktail[]) => {
                this.cocktails =cocktailsList
            }
          )
  }

}
