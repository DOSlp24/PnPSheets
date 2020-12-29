import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../interface/item';

@Component({
  selector: 'inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  @Input() data: Item[];

  constructor() { }

  ngOnInit(): void {
  }

}
