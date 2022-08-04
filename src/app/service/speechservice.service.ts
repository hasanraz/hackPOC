import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { timeout, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpeechserviceService {
  constructor(private readonly http: HttpClient) { }
  speech(text){
    let msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
  }
  get_pythonapi(){
    return this.http.get("http://127.0.0.1:5000/index").pipe(
      timeout(100000),
    );;
  }
  savedata_post(req){
    return this.http.get("http://localhost:8080/saveMemberRes",req).pipe(
      timeout(100000),
    );;
  }
}
