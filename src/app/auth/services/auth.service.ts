import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { Credentials } from 'src/app/models/credentials.model';

const AUTH_API = 'http://localhost:5000/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  withCredentials: true,
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  login(credentials: Credentials): Observable<any> {
    return this.http.post(
      AUTH_API + 'login',
      {
        username: credentials.username,
        password: credentials.password,
      },
      httpOptions
    );
  }

  register(user: User): Observable<any> {
    return this.http.post(
      AUTH_API + 'signup',
      {
        username: user.username,
        email: user.email,
        password: user.password,
        roleId: user.roleId,
        salary: user.salary,
        description: user.description,
      },
      httpOptions
    );
  }
}
