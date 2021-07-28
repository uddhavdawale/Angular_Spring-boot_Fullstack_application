import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

   myname:string="ud";
   user:User=new User(0,"","","","","","",0,"","","");
  message:any;
  constructor(private userservice:UserServiceService) { }

  ngOnInit(): void {
  }
  public registernow()
  {
   let resp= this.userservice.userregistration(this.user);
   resp.subscribe((data) => {this.message=data})
  }

 
}
