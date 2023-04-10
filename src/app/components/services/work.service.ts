import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Work } from 'src/app/models/work.model';
import { User } from 'src/app/models/user.model';
import { FinishedWork } from 'src/app/models/finishedWork.model';

const AUTH_API = 'http://localhost:5000/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  withCredentials: true,
};

@Injectable({
  providedIn: 'root',
})
export class WorkService {
  constructor(private http: HttpClient) {}
  // Post
  postWork(work: Work): Observable<any> {
    return this.http.post(AUTH_API + 'creatework', work, httpOptions);
  }
  // get All Works
  public fetchWorks(): Observable<{ works: Work[] }> {
    return this.http.get<{ works: Work[] }>(AUTH_API + 'allworks', {
      withCredentials: true,
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('Token'),
      },
    });
  }
  // Single Work
  public fetchSingleWork(id: number): Observable<any> {
    return this.http.get<{ work: Work }>(AUTH_API + `work/${id}`, {
      withCredentials: true,
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('Token'),
      },
    });
  }
  // Delete
  public deleteWork(id: any): Observable<any> {
    return this.http.delete<{ work: Work }>(AUTH_API + `delete/${id}`, {
      withCredentials: true,
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('Token'),
      },
    });
  }
  // Require
  public require(work: Work, id: number, userId: number): Observable<any> {
    return this.http.post(AUTH_API + 'require', {
      workId: work.id,
      freelancerId: id,
      clientId: userId,
    });
  }
  public fetchRequiredWorks(): Observable<{ requiredWorks: Work[] }> {
    return this.http.get<{ requiredWorks: Work[] }>(
      AUTH_API + 'requiredworks',
      {
        withCredentials: true,
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('Token'),
        },
      }
    );
  }
  // Apply
  public apply(requiredWork: Work, freelancer: User): Observable<any> {
    return this.http.post(AUTH_API + 'apply', {
      workId: requiredWork.id,
      freelancerId: freelancer.id,
    });
  }
  public fetchAppliedWorks(): Observable<{ ongoingWorks: Work[] }> {
    return this.http.get<{ ongoingWorks: Work[] }>(AUTH_API + 'appliedworks', {
      withCredentials: true,
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('Token'),
      },
    });
  }
  // Finish
  public finishWork(work: FinishedWork, id: number): Observable<any> {
    return this.http.post(AUTH_API + 'finish', {
      workId: work.id,
      freelancerId: id,
      clientId: work.user.id,
    });
  }
  public fetchFinishedWorks(): Observable<{ finishedWorks: Work[] }> {
    return this.http.get<{ finishedWorks: Work[] }>(
      AUTH_API + 'finishedworks',
      {
        withCredentials: true,
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('Token'),
        },
      }
    );
  }
  public rateFinishedWork(
    work: any,
    rating: number,
    review: string
  ): Observable<any> {
    return this.http.post(AUTH_API + 'rate', {
      workId: work.work.id,
      rating: rating,
      review: review,
      clientId: work.clientId,
    });
  }
}
