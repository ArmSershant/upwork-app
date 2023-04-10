import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { LoginModule } from './auth/login/login.module';
import { SignupModule } from './auth/signup/signup.module';
import { UserEffects } from './store/userStore/user.effects';
import { UserReducer } from './store/userStore/user.reducers';
import { WorksComponent } from './components/works/works.component';
import { WorkReducer } from './store/workStore/work.reducers';
import { WorkEffects } from './store/workStore/work.effects';
import { ProfileModule } from './components/profile/profile.module';
import { RequiredWorksReducer } from './store/requiredWorksStore/requiredWorks.reducers';
import { RequiredWorksEffects } from './store/requiredWorksStore/requiredWorks.effects';
import { OngoingWorkReducer } from './store/ongoingWorksStore/ongoingWorks.reducers';
import { OngoingWorksEffects } from './store/ongoingWorksStore/ongoingWorks.effects';
import { FinishedWorkReducer } from './store/finishedWorksStore/finishedWorks.reducers';
import { FinishedWorksEffects } from './store/finishedWorksStore/finishedWorks.effects';
import { FreelancersModule } from './components/freelancers/freelancers.module';
import { FreelancerReducer } from './store/freelancersStore/freelancers.reducers';
import { FreelancersEffects } from './store/freelancersStore/freelancers.effects';
import { SingleworkComponent } from './pages/singlework/singlework.component';
import { HiredFreelancerReducer } from './store/hiredFreelancerStore/hiredFreelancer.reducers';
import { HiredFreelancerEffects } from './store/hiredFreelancerStore/hiredFreelancer.effects';

@NgModule({
  declarations: [AppComponent, WorksComponent, SingleworkComponent],
  imports: [
    AppRoutingModule,
    ProfileModule,
    FreelancersModule,
    BrowserModule,
    LoginModule,
    SignupModule,
    HttpClientModule,
    StoreModule.forRoot({
      user: UserReducer,
      works: WorkReducer,
      freelancers: FreelancerReducer,
      requiredWorks: RequiredWorksReducer,
      ongoingWorks: OngoingWorkReducer,
      finishedWorks: FinishedWorkReducer,
      hiredFreelancers: HiredFreelancerReducer,
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([
      UserEffects,
      WorkEffects,
      RequiredWorksEffects,
      OngoingWorksEffects,
      FinishedWorksEffects,
      FreelancersEffects,
      HiredFreelancerEffects,
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
