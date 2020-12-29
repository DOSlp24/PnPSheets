import { Component, OnInit, Input } from '@angular/core';
import { PersInfo } from '../../interface/pers_info';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'pers-information',
  templateUrl: './pers-information.component.html',
  styleUrls: ['./pers-information.component.scss']
})
export class PersInformationComponent implements OnInit {
  @Input() data: PersInfo;

  constructor(public datePipe: DatePipe) { }

  ngOnInit(): void {
  }

}
