import { Component, OnInit, Input } from '@angular/core';
import { State } from '../../interface/state';

@Component({
  selector: 'state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent implements OnInit {
  @Input() data: State;

  private maxPerLine = 51;

  public lifepointEntries: number[][];
  public mentalEntries: number[][];
  public manaEntries: number[][];
  public luckEntries: number[][];
  constructor() { }

  ngOnInit(): void {
    this.computeHitpoints();
    this.computeMetal();
    this.computeLuck();
    this.computeMana();
  }

  private computeHitpoints() {
    const maxHitpoints = this.data.hitpoints;
    this.lifepointEntries = [...new Array(Math.floor(maxHitpoints / this.maxPerLine) + 1)].map((_) => []);
    for (let i = 0; i <= maxHitpoints; i++) {
      this.lifepointEntries[Math.floor(i / this.maxPerLine)].push(i);
    }
  }

  private computeMetal() {
    const maxMental = this.data.mental;
    this.mentalEntries = [...new Array(Math.floor(maxMental / this.maxPerLine) + 1)].map((_) => []);
    for (let i = 0; i <= maxMental; i++) {
      this.mentalEntries[Math.floor(i / this.maxPerLine)].push(i);
    }
  }

  private computeMana() {
    const maxMana = this.data.mana;
    this.manaEntries = [...new Array(Math.floor(maxMana / this.maxPerLine) + 1)].map((_) => []);
    for (let i = 0; i <= maxMana; i++) {
      this.manaEntries[Math.floor(i / this.maxPerLine)].push(i);
    }
  }

  private computeLuck() {
    const maxLuck = this.data.luck;
    this.luckEntries = [...new Array(Math.floor(maxLuck / this.maxPerLine) + 1)].map((_) => []);
    for (let i = 0; i <= maxLuck; i++) {
      this.luckEntries[Math.floor(i / this.maxPerLine)].push(i);
    }
  }

}
