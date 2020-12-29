import { Money } from '../interface/money';

export class MoneyModel implements Money {
  daily_norm = 0;
  cash = 0;
  investment = 0;
  other: string[] = [];
}
