import { Component, OnInit, Input } from '@angular/core';
import { Money } from '../../interface/money';

@Component({
  selector: 'money',
  templateUrl: './money.component.html',
  styleUrls: ['./money.component.scss']
})
export class MoneyComponent implements OnInit {
  @Input() data: Money;

  constructor() { }

  ngOnInit(): void {
  }

}
