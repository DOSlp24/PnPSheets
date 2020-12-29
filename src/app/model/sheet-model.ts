import { Sheet } from '../interface/sheet';
import { BackgroundModel } from './background-model';
import { SkillModel, AttributeModel } from './skill-model';
import { CombatModel } from './combat-model';
import { MoneyModel } from './money-model';
import { StateModel } from './state-model';
import { PersInfoModel } from './pers-info-model';
import { ItemModel } from './item-model';

export class SheetModel implements Sheet {
  picture: {
    type: string;
    src: string;
  } = {
      type: "",
      src: ""
    };
  pers_info: PersInfoModel = new PersInfoModel();
  state: StateModel = new StateModel();
  background: BackgroundModel = new BackgroundModel();
  attributes: AttributeModel[] = [];
  skills: SkillModel[] = [];
  combat: CombatModel = new CombatModel();
  money: MoneyModel = new MoneyModel();
  inventory: ItemModel[] = [];
}
