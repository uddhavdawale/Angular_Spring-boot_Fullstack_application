import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {
  uid:number;
  users1:User=new User(0,"","","","","","",0,"","","");
 public obj:any;
   user33:User[];
   user2:User;

  
  users:any;
  fname:string;

  pincode:number;
  lname:string;
  constructor(private userservie:UserServiceService)
   {
     this.user33=[];
    }

  ngOnInit(): void {
   let resp= this.userservie.getUserByFName(this.fname);
   resp.subscribe(data => {this.users=data['User']});
  }
  public getinfouser()
  {
    console.log(this.fname);
    this.userservie.getUserByFName(this.fname).subscribe((data)=>{this.users=data});
  }
  public getinfobypincode()
  {
    this.userservie.getUserByPincode(this.pincode).subscribe((data)=>{this.users=data});
  }
  public getinfobylastname()
  {
    this.userservie.getUserByLname(this.lname).subscribe((data)=>{this.users=data});
  }
  public getinfobyuid()
  {
    this.userservie.getUserByuid(this.uid).subscribe((data)=>{this.obj=data});
   // alert(" getting user by id ");
  }

}
