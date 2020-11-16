import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { categorie } from 'src/shared/categorie.modal';
import { categorieService } from 'src/shared/service/categorie.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: categorie[];
  constructor(private categorieService : categorieService,
              private router: Router) { }

  ngOnInit() {
    this.categories = this.categorieService.getCategories();
  }

  onClick(id: number){
    this.router.navigate([`execute-man/${id}`]);
  }

  onChange(event: any){
    this.categories = this.categorieService.getCategories();
    this.categories = this.categories
    .filter(categorie => categorie.name.toUpperCase().includes(event.target.value.toUpperCase()));
  }
}
