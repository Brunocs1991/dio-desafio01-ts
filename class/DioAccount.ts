export abstract class DioAccount {
  readonly name: string;
  readonly accountNumber: number;
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (amount: number): void => {
    this.validateStatus()
    this.validAmount(amount)
    this.balance += amount
    console.log(`Depósito de ${amount} realizado com sucesso!`)

  }

  withdraw = (amount: number): void => {
    this.validAmount(amount)
    this.validateStatus()
    if (this.balance < amount) {
      throw new Error('Saldo insuficiente')
    }
    this.balance -= amount
    console.log(`Valor de ${amount} sacado com sucesso!`)
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  protected validateStatus = (): void => {
    if (this.status === false) {
      throw new Error('Conta desativada')
    }
  }
  protected validAmount = (amount: number): void => {
    if (amount <= 0) {
      throw new Error('Valor inválido')
    }
  }
}
