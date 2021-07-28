import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { GetEmployeeComponent } from './get-employee/get-employee.component';
import { FormControl, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchUserComponent } from './search-user/search-user.component';
import { SortbyComponent } from './sortby/sortby.component';

@NgModule({
  declarations: [
    AppComponent,
    UpdateEmployeeComponent,
    CreateEmployeeComponent,
    DeleteEmployeeComponent,
    GetEmployeeComponent,
    SearchUserComponent,
    SortbyComponent
    //FormControl
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
