import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesListItemComponent } from './recipes-list-item/recipes-list-item.component';
import { RecipesService } from 'src/app/services/recipes.service';
@Component({
  selector: 'app-recipes-list',
  standalone: true,
  imports: [RecipesListItemComponent],
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [];
  constructor(private recipesService: RecipesService) {}

  ngOnInit(): void {
    this.recipesService
      .getRecipes()
      .subscribe((resp: Recipe[]) => (this.recipes = resp));
  }
}
