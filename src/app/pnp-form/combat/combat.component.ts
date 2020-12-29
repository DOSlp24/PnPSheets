import { Component, OnInit, Input } from '@angular/core';
import { Combat } from '../../interface/combat';
import { CombatSkill } from '../../interface/combat-skill';

@Component({
  selector: 'combat',
  templateUrl: './combat.component.html',
  styleUrls: ['./combat.component.scss']
})
export class CombatComponent implements OnInit {
  @Input()
  set data(data: Combat) {
    this.comment = data.comment;
    this._data = data;
    this.formattedData = [];
    const dodge = data.dodge;
    this.formattedData.push({
      name: "Ausweichen",
      cSkill: {
        default: dodge.default,
        normal: dodge.normal,
        hard: dodge.hard,
        extreme: dodge.extreme,
        weapon: "",
        dmg: "-",
        range: 0,
        attacks: 0,
        malfunction: 0,
        shots: 0
      }
    });
    this.formattedData.push({
      name: "Nahkampf",
      cSkill: data.melee
    });
    this.formattedData.push({
      name: "Kleinkaliber",
      cSkill: data.small
    });
    this.formattedData.push({
      name: "Großkaliber",
      cSkill: data.big
    });
  }
  get data() {
    return this._data;
  }

  private _data: Combat;
  public formattedData: { name: string; cSkill: CombatSkill }[];
  public comment = "";
  public displayedColumns = ["type", "normal", "hard", "extreme", "weapon", "damage", "range", "attacks", "shots", "malfunction"];
  public displayedRows = ["dodge", "melee", "small", "big"];

  constructor() { }

  ngOnInit(): void {
  }

}
