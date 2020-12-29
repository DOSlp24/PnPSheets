import { SkillCheckVal } from './skill-check-val';
import { CombatSkill } from './combat-skill';

export interface Combat {
  comment: string;
  dodge: SkillCheckVal;
  melee: CombatSkill;
  small: CombatSkill;
  big: CombatSkill;
}
