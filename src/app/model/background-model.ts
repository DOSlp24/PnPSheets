import { Background } from '../interface/background';

export class BackgroundModel implements Background {
  description = "";
  belief = "";
  character: string[] = [];
  phobia: string[] = [];
  scars: string[] = [];
  magic: string[] = [];
  fav_place = "";
  fav_person = "";
}
