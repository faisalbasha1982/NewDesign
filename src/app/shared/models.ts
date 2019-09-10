export class Candidate
    {
        Candidateid:number; Userid?:number; Firstname:string; Lastname:string; Skype:string; Phone:string
        Candidatecol:string; Termsandcondition?:boolean; Termsofservice?:boolean;
    };

export class Customer
    {
          Customerid:number; Firstname:string; Lastname:string; Companyname:string; CountryName:string;
          Userid?:number; Termsandcondition?:boolean; Termsofservice?:boolean; Customercol:string;
    };
export class Users
    {
          Userid:number; Username:string; Password:string; Status?:boolean; Usertypeid?:number;
    };

export class Login{
          Username:string; Password:string;
    };

export class Usertype
    {
          Usertypeid:number; Usertypename:string; Status:boolean;
    }