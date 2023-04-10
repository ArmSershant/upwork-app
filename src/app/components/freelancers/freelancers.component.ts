import { Component } from '@angular/core';
import { IState } from 'src/app/store/state/state';
import { Store } from '@ngrx/store';
import { selectFreelancers } from 'src/app/store/freelancersStore/freelancers.selectors';
import {
  filterBySalary,
  getFetchedFreelancers,
  hireasyncFreelancer,
  searchBySalary,
} from 'src/app/store/freelancersStore/freelancers.actions';
import { Router } from '@angular/router';
import { selectUser } from 'src/app/store/userStore/user.selectors';
import { getFetchedUser } from 'src/app/store/userStore/user.actions';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-freelancers',
  templateUrl: './freelancers.component.html',
  styleUrls: ['./freelancers.component.css'],
})
export class FreelancersComponent {
  public freelancers$ = this.store.select(selectFreelancers);
  public user$ = this.store.select(selectUser);
  public salaryRange: number;
  public isAscending: boolean = false;
  ngOnInit() {
    this.store.dispatch(getFetchedUser());
    this.store.dispatch(getFetchedFreelancers());
  }
  onHire(freelancerId: number, id: number) {
    this.store.dispatch(hireasyncFreelancer({ freelancerId, id }));
    this.router.navigate(['/app-profile']);
  }
  onSearch() {
    let salaryRange = this.salaryRange;
    this.store.dispatch(searchBySalary({ salaryRange }));
  }
  onSelect() {
    let ascending = this.isAscending;
    this.store.dispatch(filterBySalary({ ascending }));
  }
  constructor(private store: Store<IState>, private router: Router) {}
}
