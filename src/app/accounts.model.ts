export interface accountBalance {
  typeOfAccount?: string;
  total: number;
  currency: string;
  currentpaginationNumber: number;
  savingpaginationNumber: number;
  accounts: Account[];
}
export interface Account {
  accountNumber: string;
  accountName: string;
  availableBalance: number;
  currentBalance: number;
  secondCurrency: string;
}
