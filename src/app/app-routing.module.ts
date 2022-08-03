import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyAssesmentComponent } from './body-assesment/body-assesment.component';
import { PhysicalAssesmentComponent } from './physical-assesment/physical-assesment.component';

const routes: Routes = [
  {
    path: '', component : PhysicalAssesmentComponent
  },
  {
    path: 'livingHabitAssesment', component: BodyAssesmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
