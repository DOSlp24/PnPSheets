import { Combat } from '../interface/combat';
import { CombatSkillModel } from './combat-skill-model';
import { SkillCheckValModel } from './skill-check-val-model';

export class CombatModel implements Combat {
  comment = "";
  dodge: SkillCheckValModel = new SkillCheckValModel();
  melee: CombatSkillModel = new CombatSkillModel();
  small: CombatSkillModel = new CombatSkillModel();
  big: CombatSkillModel = new CombatSkillModel();
}
