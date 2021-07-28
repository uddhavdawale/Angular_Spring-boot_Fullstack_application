import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-get-employee',
  templateUrl: './get-employee.component.html',
  styleUrls: ['./get-employee.component.css']
})
export class GetEmployeeComponent implements OnInit
 {
    users: User[];
  constructor( private uservice:UserServiceService) 
  {
    this.users=[];
   }

  ngOnInit(): void
   {
    this.getdate();
    
  
  }
  private getdate()
  {
  this.uservice.getuserslist().subscribe(data => {    this.users=data; 
  console.log(this.users);
   });
  }

}
