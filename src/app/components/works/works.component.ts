import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { WorkService } from 'src/app/components/services/work.service';
import { Work } from 'src/app/models/work.model';
import { requireasyncwork } from 'src/app/store/requiredWorksStore/requiredWorks.actions';
import { IState } from 'src/app/store/state/state';
import { getFetchedUser } from 'src/app/store/userStore/user.actions';
import { selectUser } from 'src/app/store/userStore/user.selectors';
import { getFetchedWorks } from 'src/app/store/workStore/work.actions';
import { selectWorks } from 'src/app/store/workStore/work.selectors';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css'],
})
export class WorksComponent {
  public works$ = this.store.select(selectWorks);
  public user$ = this.store.select(selectUser);
  public works: Work[] = [];
  public displayedWorks: Work[];
  public numDisplayedWorks = 1;
  ngOnInit() {
    this.store.dispatch(getFetchedWorks());
    this.store.dispatch(getFetchedUser());
    this.displayedWorks = this.works.slice(0, this.numDisplayedWorks);
  }
  onApply(work: Work, id: number) {
    let clientId = work.clientId;
    this.store.dispatch(requireasyncwork({ work, id, clientId }));
    this.router.navigate([`/app-profile`]);
  }

  loadMore() {
    this.numDisplayedWorks += 4;
    this.displayedWorks = this.works.slice(0, this.numDisplayedWorks);
  }

  constructor(private store: Store<IState>, private router: Router) {
    this.works$.subscribe((works: any) => (this.works = works));
  }
}
