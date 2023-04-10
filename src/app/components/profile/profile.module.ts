import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgxStarRatingModule } from 'ngx-star-rating';


@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxStarRatingModule,
  ],
})
export class ProfileModule {}
