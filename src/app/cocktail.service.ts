
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cocktail } from './models/cocktail.model';

@Injectable({ providedIn: 'root' })

export class CocktailService {

  constructor(private HTTPservice: HttpClient) { }

  public getCocktails(): Observable<Cocktail[]> {
    return this.HTTPservice.get<Cocktail[]>("assets/cocktails.json");
  };
}