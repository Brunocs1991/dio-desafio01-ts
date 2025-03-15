import { DioAccount } from "./DioAccount";

export class SpecialAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  specialDeposit = (amount: number) => {
    this.deposit(amount += 10);
  };
}