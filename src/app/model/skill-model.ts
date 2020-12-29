import { Skill, Attribute } from '../interface/skill';
import { SkillCheckValModel } from './skill-check-val-model';

export class SkillModel implements Skill {
  name = "";
  values: SkillCheckValModel = new SkillCheckValModel();
}

export class AttributeModel implements Attribute {
  name = "";
  values: SkillCheckValModel = new SkillCheckValModel();
}
