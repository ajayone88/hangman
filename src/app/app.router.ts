import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { ExecuteManComponent } from './execute-man/execute-man.component';

const appRoute: Routes = [
    {
        path: 'categories',
        component: CategoriesComponent
    },
    {
        path: 'execute-man/:id',
        component: ExecuteManComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoute)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRouter{}