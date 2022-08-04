import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  physicalAssesment = {
    weight: '',
    height: '',
    temp: '',
    bp: ''
  };

  habitAssesment = {
    bowel: '',
    bladder: '',
    grooming: '',
    feeding: ''
  };

  constructor() { }

}
