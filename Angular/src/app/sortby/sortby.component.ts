import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-sortby',
  templateUrl: './sortby.component.html',
  styleUrls: ['./sortby.component.css']
})
export class SortbyComponent implements OnInit
 {
  users:User[];
  users1:User[];
  sortbydoj:string;
  sortbydojanddob:string;
  constructor(private userservie:UserServiceService)
   { this.users=[];
    this.users1=[];
   }

  ngOnInit(): void 
  {
  }

  public sortbydoj1()
  {
      //this.userservie.sortbydoj().
      let resp= this.userservie.srtbydob();
   resp.subscribe(data => {this.users=data});
  }
  public sortbydojanddob1()
  {
    
    let resp= this.userservie.srtbydobanddoj();
    resp.subscribe(data => {this.users=data});


  }

}
