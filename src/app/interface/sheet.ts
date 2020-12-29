import { Attribute, Skill } from './skill';
import { Combat } from './combat';
import { Background } from './background';
import { PersInfo } from './pers_info';
import { State } from './state';
import { Money } from './money';
import { Item } from './item';

export interface Sheet {
  picture: {
    type: string;
    src: string;
  };
  pers_info: PersInfo;
  state: State;
  background: Background;
  attributes: Attribute[];
  skills: Skill[];
  combat: Combat;
  money: Money;
  inventory: Item[];
}
