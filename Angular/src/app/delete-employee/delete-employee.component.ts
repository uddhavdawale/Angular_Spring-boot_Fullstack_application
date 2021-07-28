import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

   public mydelete:any;
   public serverName:any;
   uid:number;
   todaydate = new Date();  
  public deletmsg:any;

  constructor(private userservice:UserServiceService)
   {
    
  }

  ngOnInit(): void {
  }

  public deletebtn()
  {
   
    this.userservice.deleteUser(this.uid).subscribe(data=>{this.deletmsg=data});
  }
 

}
