import { SkillCheckVal } from './skill-check-val';

export interface CombatSkill extends SkillCheckVal {
  weapon: string;
  dmg: string;
  range: number;
  attacks: number;
  shots: number;
  malfunction: number;
}
