import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Login, Candidate } from '../models';

@Injectable({
  providedIn: 'root'
})

export class DeveloperService {

  private loginDeveloperURL = '';
  private signUpDeveloperURL = '';

  constructor(private http: HttpClient) { // , private header: HttpHeaders
  }

  public signUpDeveloper(signupDetails:Candidate):Observable<any> {

    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<any>(this.signUpDeveloperURL, signupDetails, {
      headers: httpHeaders,
      observe: 'response'
    });

  }

  public loginByDeveloper(username: string, password:string): Observable<any> {
    
      const httpHeaders = new HttpHeaders({
        'Content-Type': 'application/json'
      });

      var loginObject:any = new Login();
      loginObject.Username = username;
      loginObject.Password = password;

      return this.http.post<any>(this.loginDeveloperURL, loginObject, {
        headers: httpHeaders,
        observe: 'response'
      });
    }
}
