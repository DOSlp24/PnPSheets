import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sheet } from '../interface/sheet';
import { HttpClient } from '@angular/common/http';
import * as d3 from 'd3';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-sheet-view',
  templateUrl: './sheet-view.component.html',
  styleUrls: ['./sheet-view.component.scss']
})
export class SheetViewComponent implements OnInit {
  public data: Sheet;
  public pdfExportFlag = false;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.route.params.subscribe(params => {
      console.log(params);
      const obs = this.getJson("mockup");
      obs.subscribe((data: Sheet) => {
        this.data = data;
        console.log(data);
      });
    })
  }

  ngOnInit(): void {
  }

  private getJson(url: string) {
    return this.http.get("assets/json/" + url + ".json");
  }

  public exportPdf() {
    //this.pdfExportFlag = true;
    const pageOne = document.getElementById('page-one');
    const pageTwo = document.getElementById('page-two');
    html2canvas(pageOne).then(pageOneCanvas => {
      html2canvas(pageTwo).then(pageTwoCanvas => {
        const pageOneImage = pageOneCanvas.toDataURL('image/png')
        const pageTwoImage = pageTwoCanvas.toDataURL('image/png');
        const pdf = new jspdf('p', 'cm', 'a4'); //Generates PDF in landscape mode

        const imageOneRatio = pageOneCanvas.height / pageOneCanvas.width;
        const imageTwoRatio = pageTwoCanvas.height / pageTwoCanvas.width
        const imageOneHeight = 21.0 * imageOneRatio;
        const imageTwoHeight = 21.0 * imageTwoRatio;

        pdf.addImage(pageOneImage, 'PNG', 0, 0, 21.0, imageOneHeight);
        pdf.addPage();
        pdf.addImage(pageTwoImage, 'PNG', 0, 0, 21.0, imageTwoHeight);
        pdf.save(this.data.pers_info.name.replace(" ", "_") + '.pdf');
        //this.pdfExportFlag = false;
      });
    });
  }
}
