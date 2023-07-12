import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Recipe } from '../recipes/recipe.model';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private recipesUrl = '/recipes';

  constructor(private http: HttpClient, private headers: HttpHeaders) {}

  public getRecipes(): Observable<Recipe[]> {
    return this.http
      .get<Recipe[]>(this.recipesUrl)
      .pipe(catchError(this.handleError<Recipe[]>([])));
  }

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
