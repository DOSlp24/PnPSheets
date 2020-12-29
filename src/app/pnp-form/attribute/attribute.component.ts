import { Component, OnInit, Input } from '@angular/core';
import { Attribute } from '../../interface/skill';
import * as d3 from 'd3';

@Component({
  selector: 'attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.scss']
})
export class AttributeComponent implements OnInit {
  @Input()
  set data(d: Attribute) {
    this._data = d;
    const line = d3.line();
    const svg = d3.select(".d3-controller")
      .append("svg")
      .attr("width", 200);
    svg.append("path")
      .attr("d", line([[20, 100], [120, 100], [70, 50], [20, 100]]))
      .attr("stroke", "black")
      .attr("fill", "grey");
    svg.append("text")
      .attr("x", 58)
      .attr("y", 15)
      .text(d.name);

    svg.append("text")
      .attr("x", 63)
      .attr("y", 40)
      .text(d.values.normal);
    svg.append("text")
      .attr("x", 0)
      .attr("y", 100)
      .text(d.values.hard);
    svg.append("text")
      .attr("x", 125)
      .attr("y", 100)
      .text(d.values.extreme);
  }
  get data() {
    return this._data;
  }

  private _data: Attribute;

  constructor() { }

  ngOnInit(): void {
  }

}
