import { Component, OnInit } from '@angular/core';
import { UtilService } from '../service/util.service';

@Component({
  selector: 'app-accepted-assesment',
  templateUrl: './accepted-assesment.component.html',
  styleUrls: ['./accepted-assesment.component.scss']
})
export class AcceptedAssesmentComponent implements OnInit {

  constructor(public utilService: UtilService) { }

  ngOnInit(): void {
  }

}
