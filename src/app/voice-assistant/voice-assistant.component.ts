import { Component, OnInit } from '@angular/core';
import { SpeechserviceService } from '../service/speechservice.service';

@Component({
  selector: 'app-voice-assistant',
  templateUrl: './voice-assistant.component.html',
  styleUrls: ['./voice-assistant.component.scss']
})
export class VoiceAssistantComponent implements OnInit {

  activatemic: boolean;
  response: Object;
  showmic: boolean;

  constructor(public speech:SpeechserviceService) { }

  ngOnInit(): void {
    this.activatemic=true;
    this.showmic=false;
    
  }
  start_mic(){
    this.showmic=true;
    this.speech.get_pythonapi().subscribe((res)=>{
      this.response=res;
      this.showmic=false;
      this.save_navigator();
    },err=>{
      //this.showmic=false;
    });

  }
  save_navigator(){
    this.speech.savedata_post(this.response).subscribe((res)=>{
      console.log("success");
    });
  }

}
