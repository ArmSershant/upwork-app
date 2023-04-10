import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { WorksComponent } from './components/works/works.component';
import { FreelancersComponent } from './components/freelancers/freelancers.component';

const routes: Routes = [
  { path: '', redirectTo: 'app-login', pathMatch: 'full' },
  { path: 'app-login', component: LoginComponent },
  { path: 'app-signup', component: SignupComponent },
  { path: 'app-profile', component: ProfileComponent },
  { path: 'app-works', component: WorksComponent },
  { path: 'app-freelancers', component: FreelancersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
