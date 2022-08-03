import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { VoiceRecognitionService } from './../service/voice-recognition.service';

@Component({
  selector: 'app-physical-assesment',
  templateUrl: './physical-assesment.component.html',
  styleUrls: ['./physical-assesment.component.scss']
})
export class PhysicalAssesmentComponent implements OnInit {
  startDemographic = false;
  values = [];
  weight = new FormControl('');
  height = new FormControl('');
  temperature = new FormControl('');
  bloodPressure = new FormControl('');
  startNext = false;

  constructor(public voiceRecognitionService: VoiceRecognitionService, 
    public router: Router) {
  }

  ngOnInit() {
    this.voiceRecognitionService.init();
  }

  startAssesment() {
    this.voiceRecognitionService.start();
    this.startDemographic = true;
  }

  submitAssesment() {
    this.voiceRecognitionService.stop();
    this.startDemographic = false;
    this.values = [];
    for (let i = 0; i < this.voiceRecognitionService.sentence.length; i++) {
      console.log(this.voiceRecognitionService.sentence[i]);
      let matches = this.voiceRecognitionService.sentence[i].match(/(\d+)/);
      this.values.push(matches);
      console.log(this.values[i]);
    }
   this.weight.setValue(this.values[0][0]);
   this.height.setValue(this.values[1][0]);
   this.temperature.setValue(this.values[2][0]);
   this.bloodPressure.setValue(this.values[3][0]);
  }

  nextAssesment() {
    this.startNext = true;
    this.router.navigate['livingHabitAssesment']
  }

}
