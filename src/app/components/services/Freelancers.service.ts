import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';

const AUTH_API = 'http://localhost:5000/';

@Injectable({
  providedIn: 'root',
})
export class FreelancersService {
  constructor(private http: HttpClient) {}
  public fetchFreelancers(): Observable<{ freelancers: User[] }> {
    return this.http.get<{ freelancers: User[] }>(AUTH_API + 'allfreelancers', {
      withCredentials: true,
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('Token'),
      },
    });
  }
  public hire(freelancerId: number, id: number): Observable<any> {
    return this.http.post(AUTH_API + 'hirefreelancer', {
      freelancerId: freelancerId,
      clientId: id,
    });
  }
  public fetchHiredFreelancer(): Observable<{ hiredFreelancers: User[] }> {
    return this.http.get<{ hiredFreelancers: User[] }>(
      AUTH_API + 'hiredfreelancer',
      {
        withCredentials: true,
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('Token'),
        },
      }
    );
  }
  public fetchSearchBySalary(salaryRange: number): Observable<any> {
    return this.http.post(AUTH_API + 'searchby', {
      salaryRange: salaryRange,
    });
  }
  public fetchFilterBySalary(ascending: boolean): Observable<any> {
    return this.http.post(AUTH_API + 'filterby', {
      ascending: ascending,
    });
  }
}
