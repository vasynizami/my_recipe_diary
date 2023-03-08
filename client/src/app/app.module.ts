import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { AccountMenuComponent } from './shared/navigation/account-menu/account-menu.component';
import { SearchComponent } from './shared/navigation/search/search.component';
import { FooterComponent } from './shared/footer/footer.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesListItemComponent } from './recipes/recipes-list/recipes-list-item/recipes-list-item.component';
import { RecipeCreateFormComponent } from './recipes/recipe-create-form/recipe-create-form.component';
import { RecipeEditFormComponent } from './recipes/recipe-edit-form/recipe-edit-form.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NavigationComponent,
    AccountMenuComponent,
    SearchComponent,
    FooterComponent,
    RecipesListComponent,
    RecipesListItemComponent,
    RecipeCreateFormComponent,
    RecipeEditFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
