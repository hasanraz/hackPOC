import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceptedAssesmentComponent } from './accepted-assesment/accepted-assesment.component';
import { BodyAssesmentComponent } from './body-assesment/body-assesment.component';
import { PhysicalAssesmentComponent } from './physical-assesment/physical-assesment.component';
import { VoiceAssistantComponent } from './voice-assistant/voice-assistant.component';

const routes: Routes = [
  {
    path: 'navigator', component: VoiceAssistantComponent
  },
  {
    path: '', component : PhysicalAssesmentComponent
  },
  {
    path: 'livingHabitAssesment', component: BodyAssesmentComponent
  },
  {
    path: 'acceptedAssesment', component: AcceptedAssesmentComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
