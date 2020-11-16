import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRouter } from './app.router';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { ExecuteManComponent } from './execute-man/execute-man.component';
import { categorieService } from 'src/shared/service/categorie.service';
import { apiService } from 'src/shared/service/api.service';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    ExecuteManComponent
  ],
  imports: [
    BrowserModule,
    AppRouter
  ],
  providers: [categorieService, apiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
