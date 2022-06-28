import { Injectable } from '@angular/core';
import { Cocktail } from './models/cocktail.model';

@Injectable({
  providedIn: 'root'
})

export class CocktailService {

  public cocktailList: Cocktail[]=[
  new Cocktail("cocktail 1",0,"http://histoiresdefruit.com/wp-content/uploads/2013/11/DSC_2300_w-1024x682.jpg"),
  new Cocktail("cocktail 2",10,"http://histoiresdefruit.com/wp-content/uploads/2013/11/DSC_2300_w-1024x682.jpg"),
  new Cocktail("cocktail 3",10,"http://histoiresdefruit.com/wp-content/uploads/2013/11/DSC_2300_w-1024x682.jpg"),
  ]
  constructor() { }

  public getCocktails() {
    return(this.cocktailList);
  }


}
