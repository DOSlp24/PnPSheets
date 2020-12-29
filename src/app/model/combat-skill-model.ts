import { CombatSkill } from '../interface/combat-skill';
import { SkillCheckValModel } from './skill-check-val-model';

export class CombatSkillModel extends SkillCheckValModel implements CombatSkill {
  weapon = "";
  dmg = "";
  range = 0;
  attacks = 0;
  shots = 0;
  malfunction = 0;
}
