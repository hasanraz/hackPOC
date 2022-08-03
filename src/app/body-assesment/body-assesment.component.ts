import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { VoiceRecognitionService } from '../service/voice-recognition.service';

@Component({
  selector: 'app-body-assesment',
  templateUrl: './body-assesment.component.html',
  styleUrls: ['./body-assesment.component.scss']
})
export class BodyAssesmentComponent implements OnInit {

  startBodyAssesment = false;
  values = [];
  bowel = new FormControl('');
  bladder = new FormControl('');
  grooming = new FormControl('');
  feeding = new FormControl('');

  constructor(public voiceRecognitionService: VoiceRecognitionService) {
  }

  ngOnInit() {
    this.voiceRecognitionService.init();
    
  }

  startAssesment() {
    this.voiceRecognitionService.start();
    this.startBodyAssesment = true;
  }

  submitAssesment() {
    this.voiceRecognitionService.stop();
    this.startBodyAssesment = false;
    this.values = [];
    for (let i = 0; i < this.voiceRecognitionService.sentence.length; i++) {
      console.log(this.voiceRecognitionService.sentence[i]);
      let matches = this.voiceRecognitionService.sentence[i].match(/(\d+)/);
      this.values.push(matches);
      console.log(this.values[i]);
    }
   this.bowel.setValue(this.values[0][0]);
   this.bladder.setValue(this.values[1][0]);
   this.grooming.setValue(this.values[2][0]);
   this.feeding.setValue(this.values[3][0]);
  }

  saveAssesment() {
  }

}
