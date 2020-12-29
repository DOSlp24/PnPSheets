import { Component, OnInit, Input } from '@angular/core';
import { Background } from '../../interface/background';

@Component({
  selector: 'background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit {
  @Input() data: Background;

  constructor() { }

  ngOnInit(): void {
  }

}
