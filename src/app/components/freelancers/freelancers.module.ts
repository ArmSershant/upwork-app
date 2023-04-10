import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreelancersRoutingModule } from './freelancers-routing.module';
import { FreelancersComponent } from './freelancers.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FreelancersComponent],
  imports: [CommonModule, FreelancersRoutingModule, FormsModule],
})
export class FreelancersModule {}
