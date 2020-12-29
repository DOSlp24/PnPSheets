import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Sheet } from '../interface/sheet';
import { SheetModel } from '../model/sheet-model';
import { Observable, BehaviorSubject } from 'rxjs';
import { SkillModel, AttributeModel } from '../model/skill-model';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-sheet-maker',
  templateUrl: './sheet-maker.component.html',
  styleUrls: ['./sheet-maker.component.scss']
})
export class SheetMakerComponent implements OnInit {

  private data: BehaviorSubject<Sheet> = new BehaviorSubject(new SheetModel());
  public tmpData: Sheet;

  public downloadHref: SafeUrl;
  public uploader: FileUploader;

  public dirty = false;

  public skillText = "";
  public attrText = "";
  public charText = "";
  public phobText = "";
  public scarText = "";
  public magicText = "";
  public itemNameText = "";
  public itemDescText = "";
  public valuableText = "";

  public defaultDate = new Date("01.01.1920");

  constructor(private sanitizer: DomSanitizer) {
    this.uploader = new FileUploader({});
    this.data.subscribe((d) => {
      this.dirty = true;
    });
    this.tmpData = new SheetModel();
    console.log(this.tmpData);
  }

  ngOnInit(): void {
  }

  public generateDownloadJsonUri() {
    const json = JSON.stringify(this.data.value);
    const uri = this.sanitizer.bypassSecurityTrustUrl("data:text/json;charset=UTF-8," + encodeURIComponent(json));
    this.downloadHref = uri;
    this.dirty = false;
  }

  public refreshData() {
    this.data.next(this.tmpData);
  }

  public uploadJson(files: FileList) {
    if (files !== null) {
      const file = files.item(0);
      const reader = new FileReader();
      reader.onload = (e) => {
        const result: string = reader.result.toString();
        this.tmpData = JSON.parse(result);
        this.refreshData();
      }
      reader.readAsText(file);
    }
  }

  public getName() {
    return this.tmpData.pers_info.name;
  }

  public pushHitpoints(hitpoints: number) {
    this.tmpData.state.hitpoints = hitpoints;
    this.refreshData();
  }

  public pushMana(mana: number) {
    this.tmpData.state.mana = mana;
    this.refreshData();
  }

  public pushLuck(luck: number) {
    this.tmpData.state.luck = luck;
    this.refreshData();
  }

  public pushMental(mental: number) {
    this.tmpData.state.mental = mental;
    this.refreshData();
  }

  public pushSkill(skill: string) {
    const skModel = new SkillModel();
    const sepSkill = skill.split("#");
    const name = sepSkill[0];
    const skillCheckPoint = this.getSkillCheckPoint(+sepSkill[1]);
    skModel.name = name;
    skModel.values = skillCheckPoint;
    this.tmpData.skills.push(skModel);
    this.refreshData();
    this.skillText = "";
  }

  public incDecSkill(index: number, modifier: number) {
    const skill = this.tmpData.skills[index];
    this.tmpData.skills[index].values = this.getSkillCheckPoint(skill.values.normal + modifier);
    this.refreshData();
  }

  public deleteSkill(index: number) {
    this.tmpData.skills.splice(index, 1);
    this.refreshData();
  }

  public pushAttribute(attr: string) {
    const attrModel = new AttributeModel();
    const sepAttr = attr.split("#");
    const name = sepAttr[0];
    const skillCheckPoint = this.getSkillCheckPoint(+sepAttr[1]);
    attrModel.name = name;
    attrModel.values = skillCheckPoint;
    this.tmpData.attributes.push(attrModel);
    this.refreshData();
    this.attrText = "";
  }

  public incDecAttribute(index: number, modifier: number) {
    const attr = this.tmpData.attributes[index];
    this.tmpData.attributes[index].values = this.getSkillCheckPoint(attr.values.normal + modifier);
    this.refreshData();
  }

  public deleteAttribute(index: number) {
    this.tmpData.attributes.splice(index, 1);
    this.refreshData();
  }

  public pushChar(char: string) {
    this.tmpData.background.character.push(char);
    this.charText = "";
    this.refreshData();
  }

  public deleteChar(index: number) {
    this.tmpData.background.character.splice(index, 1);
    this.refreshData();
  }

  public pushPhobia(phob: string) {
    this.tmpData.background.phobia.push(phob);
    this.phobText = "";
    this.refreshData();
  }

  public deletePhobia(index: number) {
    this.tmpData.background.phobia.splice(index, 1);
    this.refreshData();
  }

  public pushScar(scar: string) {
    this.tmpData.background.scars.push(scar);
    this.scarText = "";
    this.refreshData();
  }

  public deleteScar(index: number) {
    this.tmpData.background.scars.splice(index, 1);
    this.refreshData();
  }

  public pushSpell(spell: string) {
    this.tmpData.background.magic.push(spell);
    this.magicText = "";
    this.refreshData();
  }

  public deleteSpell(index: number) {
    this.tmpData.background.magic.splice(index, 1);
    this.refreshData();
  }

  public pushItem() {
    this.tmpData.inventory.push({ name: this.itemNameText, description: this.itemDescText });
    this.itemNameText = "";
    this.itemDescText = "";
    this.refreshData();
  }

  public deleteItem(index: number) {
    this.tmpData.inventory.splice(index, 1);
    this.refreshData();
  }

  public pushValuable(val: string) {
    this.tmpData.money.other.push(val);
    this.valuableText = "";
    this.refreshData();
  }

  public deleteValuable(index: number) {
    this.tmpData.money.other.splice(index, 1);
    this.refreshData();
  }

  private getSkillCheckPoint(max: number) {
    return { default: 5, normal: max, hard: Math.floor(max / 2), extreme: Math.floor(max / 5) };
  }
}
