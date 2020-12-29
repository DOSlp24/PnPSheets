import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'char-picture',
  templateUrl: './char-picture.component.html',
  styleUrls: ['./char-picture.component.scss']
})
export class CharPictureComponent implements OnInit {
  @Input() data: {
    src: string;
    type: string;
  };

  constructor() { }

  ngOnInit(): void {
  }

}
