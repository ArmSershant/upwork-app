import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { IState } from 'src/app/store/state/state';
import { getFetchedSingleWork } from 'src/app/store/workStore/work.actions';
import { selectWork } from 'src/app/store/workStore/work.selectors';

@Component({
  selector: 'app-singlework',
  templateUrl: './singlework.component.html',
  styleUrls: ['./singlework.component.css'],
})
export class SingleworkComponent {
  constructor(private store: Store<IState>, private route: ActivatedRoute) {}
  public work$ = this.store.select(selectWork);
  ngOnInit() {
    this.route.params.subscribe(({ id }) => {
      this.store.dispatch(getFetchedSingleWork({ id }));
    });
  }
}
