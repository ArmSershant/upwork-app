import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IState } from '../../store/state/state';
import { getFetchedUser } from '../../store/userStore/user.actions';
import { selectUser } from '../../store/userStore/user.selectors';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Work } from '../../models/work.model';
import { selectWorks } from '../../store/workStore/work.selectors';
import {
  applyasyncWork,
  createWork,
  deleteasyncWork,
  getFetchedWorks,
} from '../../store/workStore/work.actions';
import { selectAppliedWorks } from '../../store/ongoingWorksStore/ongoingWorks.selectors';
import { getAppliedWorks } from '../../store/ongoingWorksStore/ongoingWorks.actions';
import {
  finishasyncWork,
  getFinishedWorks,
  rateFinishedWork,
} from '../../store/finishedWorksStore/finishedWorks.actions';
import { selectFinishedWorks } from '../../store/finishedWorksStore/finishedWorks.selectors';
import { selectHiredFreelancer } from 'src/app/store/hiredFreelancerStore/hiredFreelancer.selectors';
import { getFetchedHiredFreelancers } from 'src/app/store/hiredFreelancerStore/hiredFreelancer.actions';
import { User } from 'src/app/models/user.model';
import { selectRequiredWorks } from 'src/app/store/requiredWorksStore/requiredWorks.selectors';
import { getRequiredWorks } from 'src/app/store/requiredWorksStore/requiredWorks.actions';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FinishedWork } from 'src/app/models/finishedWork.model';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  public showNotifications = false;
  public user$ = this.store.select(selectUser);
  public works$ = this.store.select(selectWorks);
  public works: Work[] = [];
  public userId: number;
  public user = this.user$.subscribe((user) => (this.userId = user.id));
  public requiredWorks$ = this.store.select(selectRequiredWorks);
  public requiredWorks = [];
  public freelancer: User;
  public appliedWorks$ = this.store.select(selectAppliedWorks);
  public appliedWorks = [];
  public finishedWorks$ = this.store.select(selectFinishedWorks);
  public finishedWorks = [];
  public hiredFreelancer$ = this.store.select(selectHiredFreelancer);
  public hiredFreelancers = [];
  public form: FormGroup;
  public rating = null;
  public review: string = '';
  ngOnInit(): void {
    this.store.dispatch(getFetchedUser());
    this.store.dispatch(getFetchedWorks());
    this.store.dispatch(getRequiredWorks());
    this.store.dispatch(getAppliedWorks());
    this.store.dispatch(getFinishedWorks());
    this.store.dispatch(getFetchedHiredFreelancers());
  }
  categories: string[] = [
    'React',
    'Angular',
    'Node',
    'Vue',
    'Next',
    'Wordpress',
    'HTML',
    'CSS',
  ];
  work: Work = {
    id: 0,
    title: '',
    description: '',
    budget: 0,
    category: '',
    clientId: this.user,
    status: '0',
  };

  onSubmit(form: NgForm) {
    let work = new Work(
      this.work.id,
      form.value.title,
      form.value.description,
      form.value.budget,
      form.value.category,
      this.userId,
      '0'
    );
    this.store.dispatch(createWork({ work }));
    this.router.navigate(['/app-works']);
  }

  onDelete(id: number) {
    this.store.dispatch(deleteasyncWork({ id }));
    this.store.dispatch(getFetchedWorks());
  }

  onApply(requiredWork: Work, freelancer: User) {
    this.showNotifications = !this.showNotifications;
    this.store.dispatch(applyasyncWork({ requiredWork, freelancer }));
  }

  onFinish(work: FinishedWork, id: number) {
    this.store.dispatch(finishasyncWork({ work, id }));
  }

  submitRating(work: Work) {
    let rating = this.form.value.rating;
    let review = this.form.value.review;
    this.store.dispatch(rateFinishedWork({ work, rating, review }));
  }

  constructor(
    private store: Store<IState>,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.works$.subscribe(
      (works: any) =>
        (this.works = works.filter(
          (work: Work) => work.clientId === this.userId
        ))
    );
    this.requiredWorks$.subscribe(
      (reqWorks) => (this.requiredWorks = reqWorks)
    );
    this.appliedWorks$.subscribe(
      (appliedWorks) => (this.appliedWorks = appliedWorks)
    );
    this.finishedWorks$.subscribe(
      (finishedWorks) => (this.finishedWorks = finishedWorks)
    );
    this.hiredFreelancer$.subscribe(
      (hiredFreelancers) => (this.hiredFreelancers = hiredFreelancers)
    );
    this.form = this.fb.group({
      rating: [null, Validators.required],
      review: ['', Validators.required],
    });
  }
}
