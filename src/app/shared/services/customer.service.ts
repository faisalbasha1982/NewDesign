import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Customer, Login } from '../models';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {

  private signupCustomerURL = '';
  private loginCustomerURL = '';

  constructor(private http: HttpClient) { // , private header: HttpHeaders
  }

  public signupCustomer(signupDetails:Customer):Observable<any> {

    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<any>(this.signupCustomerURL, signupDetails, {
      headers: httpHeaders,
      observe: 'response'
    });

  }

  public loginByCustomer(username: string, password:string): Observable<any> {
    
      const httpHeaders = new HttpHeaders({
        'Content-Type': 'application/json'
      });

      var loginObject:any = new Login();
      loginObject.Username = username;
      loginObject.Password = password;

      return this.http.post<any>(this.loginCustomerURL, loginObject, {
        headers: httpHeaders,
        observe: 'response'
      });
    }
}
