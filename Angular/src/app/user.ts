export class User 
{
    uid: number;
    fname: String;
    mname: String;
    lname: String;
    phone: String;
    city: string;
    state: String;
    pincode: number;
    doj: String;
    dob: String;
    profile: string;
 
    constructor(uid: number,fname: String,mname: String,lname: String,phone: String,city: string,state: String,
        pincode: number,doj: String,dob: String,profile: string)
    {
        this.uid=uid;
        this.fname=fname;
        this.mname=mname;
        this.lname=lname;
        this.phone=phone;
        this.city=city;
        this.state=state;
        this.pincode=pincode;
        this.dob=dob;
        this.doj=doj;
        this.profile=profile;

    }
}
