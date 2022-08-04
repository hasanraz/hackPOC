import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { VoiceRecognitionService } from './../service/voice-recognition.service';
import { UtilService } from '../service/util.service';

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
  loader: boolean;

  constructor(public voiceRecognitionService: VoiceRecognitionService, 
    public router: Router,
    public utilService: UtilService) {
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
    if(this.values[0] && this.values[0][0]){
      this.weight.setValue(this.values[0][0]);
    }
    if(this.values[1] && this.values[1][0]){
      this.height.setValue(this.values[1][0]);
    }
    if(this.values[2] && this.values[2][0]){
      this.temperature.setValue(this.values[2][0]);
    }
   this.setBloodPressure();
    this.utilService.physicalAssesment.weight = this.weight.value;
    this.utilService.physicalAssesment.height = this.height.value;
    this.utilService.physicalAssesment.temp = this.temperature.value;
    this.utilService.physicalAssesment.bp = this.bloodPressure.value;
     this.loader=true;
     setTimeout(() => {
      this.nextAssesment();
      this.loader=false;
     }, 5000);
    }
  
    nextAssesment() {
      this.startNext = true;
      this.router.navigate(['livingHabitAssesment']);
    }

    setBloodPressure() {
      let words = this.voiceRecognitionService.sentence[3].split(' ');
      let bpVal = []
      for (let k = 0; k < words.length; k++) {
        if (words[k].match(/(\d+)/)) {
          bpVal.push(words[k].match(/(\d+)/)[0]);
        }
      }
      this.bloodPressure.setValue(bpVal[0]+ '/'+ bpVal[1])
    }

}
