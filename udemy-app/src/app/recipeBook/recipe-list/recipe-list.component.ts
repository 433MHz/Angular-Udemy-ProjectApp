import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://source.unsplash.com/daily?food'),
    new Recipe('Shnitzel', 'Tasty shnitzel', 'https://source.unsplash.com/daily?food')
  ];

  actualRecipe: Recipe = null;

  setActualRecipe(event){
    this.actualRecipe = event;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
