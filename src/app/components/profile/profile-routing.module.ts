import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleworkComponent } from 'src/app/pages/singlework/singlework.component';

const routes: Routes = [
  {
    path: 'app-singlework/:id',
    component: SingleworkComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
