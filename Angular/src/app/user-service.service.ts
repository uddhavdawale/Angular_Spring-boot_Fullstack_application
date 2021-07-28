import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  //private baseusrl="http://localhost:8080/uinfo/1";
  private baseusrl="http://localhost:8080/getall";
  constructor(private httpclient:HttpClient) { }
  getuserslist():Observable<User[]>
  {
    return this.httpclient.get<User[]>(`${this.baseusrl}`);
  }
  postdata()
  {
    console.log("Request Post.... ")
  }

  public getUserByFName(fname)
  {
    return this.httpclient.get("http://localhost:8080/user/fname/"+fname);
  }
  public getUserByLname(lname)
  {
    return this.httpclient.get("http://localhost:8080/user/lname/"+lname);
  }
  public getUserByPincode(pincode)
  {
    return this.httpclient.get("http://localhost:8080/user/pincode/"+pincode);
  }
  public deleteUser(uid)
  {
    return this.httpclient.delete("http://localhost:8080/udel/"+uid,{responseType:'text' as 'json'});
  }
  public userregistration(user)
  {
      return this.httpclient.post("http://localhost:8080/addUser",user,{responseType:'text' as 'json'});
  }
  public getUserByuid(uid)
  {
    console.log(uid)
    return this.httpclient.get("http://localhost:8080/uinfo/"+uid);
  }



  public srtbydob():Observable<User[]>
  {
    return this.httpclient.get<User[]>("http://localhost:8080/orderbydoj");
  }
  public srtbydobanddoj():Observable<User[]>
  {
    return this.httpclient.get<User[]>("http://localhost:8080/orderbydojanddob");
  }
 

}
