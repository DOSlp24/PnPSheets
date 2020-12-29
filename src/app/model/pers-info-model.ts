import { PersInfo } from '../interface/pers_info';

export class PersInfoModel implements PersInfo {
  name = "";
  played_by = "";
  ocupation = "";
  birthday = new Date();
  age = 0;
  gender = "";
  address = "";
  place_of_birth = "";
}
