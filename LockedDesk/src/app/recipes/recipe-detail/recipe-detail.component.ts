import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
   recipe: recipe;
   id: number;

  constructor(private recipeService: RecipeService, 
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params
        .subscribe(
          (params: Params) => {
            this.id = +params['id'];
            this.recipe = this.recipeService.getRecipes(this.id);
          }
        );
  }

  onAddShoppingList() {
    this.recipeService.addIngredientToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route}); the more Complex route of edit
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
}
