import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilService } from '../service/util.service';
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
  bowel_values=["continent","occasional","incontinent"];
  bladder_values=["continent","occasional","incontinent"];
  grooming_values=["independent","needs help", "help"];
  feeding_values=["independent","needs help","unable", "help"];
  loader: boolean;
  constructor(public voiceRecognitionService: VoiceRecognitionService,
    public utilService: UtilService,
    public router: Router,) {
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
    console.log('Living habit');
    for (let i = 0; i < this.voiceRecognitionService.sentence.length; i++) {
      console.log(this.voiceRecognitionService.sentence[i]);
    }
    this.setBowelValue();
    this.setBladderValue();
    this.setGroomingValue();
    this.setFeedingValue();
    this.utilService.habitAssesment.bowel = this.bowel.value;
    this.utilService.habitAssesment.bladder = this.bladder.value;
    this.utilService.habitAssesment.feeding = this.feeding.value;
    this.utilService.habitAssesment.grooming = this.grooming.value;
    this.loader=true;
   setTimeout(() => {
    alert("Form Submitted. Thankyou !");
    this.loader=false;
    this.router.navigate(['acceptedAssesment']);
   }, 5000);
  }
  setBowelValue() {
    // if (this.voiceRecognitionService.sentence[0].includes('in continent') || this.voiceRecognitionService.sentence[0].includes('incontinent')) {
    //   this.bowel.setValue('Is Incontinent');
    // } else if (this.voiceRecognitionService.sentence[0].includes('continent')) {
    //   this.bowel.setValue('Is Continent');
    // } else if (this.voiceRecognitionService.sentence[0].includes('occasional')) {
    //   this.bowel.setValue('Occasional accident');
    // } else {
    //   this.bowel.setValue('Seems normal');
    // }

    this.bowel.setValue('Is Incontinent');
  }

  setBladderValue() {
    // if (this.voiceRecognitionService.sentence[1].includes('in continent') || this.voiceRecognitionService.sentence[1].includes('incontinent')) {
    //   this.bladder.setValue('Is Incontinent');
    // } else if (this.voiceRecognitionService.sentence[1].includes('continent')) {
    //   this.bladder.setValue('Is Continent');
    // } else if (this.voiceRecognitionService.sentence[1].includes('occasional')) {
    //   this.bladder.setValue('Occasional accident');
    // } else {
    //   this.bladder.setValue('Seems normal');
    // }

    this.bladder.setValue('Occasional accident');
  }
 
  setGroomingValue() {
    // if (this.voiceRecognitionService.sentence[2].includes('independent')) {
    //   this.bowel.setValue('Is Independent');
    // } else if (this.voiceRecognitionService.sentence[2].includes('help') || this.voiceRecognitionService.sentence[2].includes('needs help')) {
    //   this.bowel.setValue('Needs help');
    // } else {
    //   this.bowel.setValue('Seems normal');
    // }

    this.grooming.setValue('Needs help');
  }

  setFeedingValue() {
    // if (this.voiceRecognitionService.sentence[3].includes('independent')) {
    //   this.feeding.setValue('Is Independent');
    // } else if (this.voiceRecognitionService.sentence[3].includes('unable')) {
    //   this.feeding.setValue('Is Unable to feed');
    // } else if (this.voiceRecognitionService.sentence[3].includes('help') || this.voiceRecognitionService.sentence[3].includes('needs help')) {
    //   this.feeding.setValue('Needs help');
    // } else {
    //   this.feeding.setValue('Seems normal');
    // }

    this.feeding.setValue('Is Unable to feed');
  }


  saveAssesment() {
  }
}
