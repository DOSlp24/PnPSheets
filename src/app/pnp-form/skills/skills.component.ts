import { Component, OnInit, Input } from '@angular/core';
import { Skill } from '../../interface/skill';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  @Input() data: Skill[];

  constructor() { }

  ngOnInit(): void {
  }

}
