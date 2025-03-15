import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { SpecialAccount } from './class/SpecialAccount'

const specialAccount: SpecialAccount = new SpecialAccount('Nath', 99)
specialAccount.specialDeposit(99)
specialAccount.withdraw(50)
console.log("====================================")
const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(100)
peopleAccount.withdraw(50)
console.log("====================================")
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(100)
companyAccount.withdraw(50)
companyAccount.getLoan(100)