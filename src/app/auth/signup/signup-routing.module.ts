import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from './signup.component';

const routes: Routes = [
  { path: 'app-signup', component: SignupComponent },
  { path: 'app-login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupRoutingModule {}
