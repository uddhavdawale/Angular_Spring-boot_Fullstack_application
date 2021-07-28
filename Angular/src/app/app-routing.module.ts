import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { GetEmployeeComponent } from './get-employee/get-employee.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { SortbyComponent } from './sortby/sortby.component';

const routes: Routes = [
  {    path: 'getallusers',component: GetEmployeeComponent},
  { path : 'register',component: CreateEmployeeComponent},
  { path: 'delete',component:DeleteEmployeeComponent},
  { path : 'search', component: SearchUserComponent},
  {path:'sortby',component:SortbyComponent},
  { path : '', redirectTo: 'register',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
