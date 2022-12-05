import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AccountsService {
  constructor(private http: HttpClient) {}

  getAccounts(): Observable<any> {
    return of([
      {
        typeOfAccount: 'Current Account',
        total: 5400,
        currency: 'USD',
        currentpaginationNumber: 3,
        accounts: [
          {
            accountNumber: '123456789123',
            accountName: 'current',
            availableBalance: 768,
            currentBalance: 4566,
            secondCurrency: 'DHC',
          },
          {
            accountNumber: '123456789123',
            accountName: 'Fresh USD',
            availableBalance: 7668,
            currentBalance: 54546,
            secondCurrency: 'DHC',
          },
          {
            accountNumber: '123456789123',
            accountName: 'Fresh LBP',
            availableBalance: 33233,
            currentBalance: 56565,
            secondCurrency: 'DHC',
          },
          {
            accountNumber: '123456789123',
            accountName: 'Current USD',
            availableBalance: 54,
            currentBalance: 789557,
            secondCurrency: 'DHC',
          },
          {
            accountNumber: '123456789123',
            accountName: 'current',
            availableBalance: 5455,
            currentBalance: 7854597,
            secondCurrency: 'DHC',
          },
          {
            accountNumber: '123456789123',
            accountName: 'current',
            availableBalance: 5455,
            currentBalance: 7854597,
            secondCurrency: 'DHC',
          },
          {
            accountNumber: '123456789123',
            accountName: 'current',
            availableBalance: 5455,
            currentBalance: 7854597,
            secondCurrency: 'DHC',
          },
          {
            accountNumber: '123456789123',
            accountName: 'current',
            availableBalance: 5455,
            currentBalance: 7854597,
            secondCurrency: 'DHC',
          },
          {
            accountNumber: '123456789123',
            accountName: 'current',
            availableBalance: 5455,
            currentBalance: 7854597,
            secondCurrency: 'DHC',
          },
          {
            accountNumber: '123456789123',
            accountName: 'current',
            availableBalance: 5455,
            currentBalance: 7854597,
            secondCurrency: 'DHC',
          },
          {
            accountNumber: '123456789123',
            accountName: 'current',
            availableBalance: 5455,
            currentBalance: 7854597,
            secondCurrency: 'DHC',
          },
          {
            accountNumber: '123456789123',
            accountName: 'current',
            availableBalance: 5455,
            currentBalance: 7854597,
            secondCurrency: 'DHC',
          },
          {
            accountNumber: '123456789123',
            accountName: 'current',
            availableBalance: 5455,
            currentBalance: 7854597,
            secondCurrency: 'DHC',
          },
          {
            accountNumber: '123456789123',
            accountName: 'current',
            availableBalance: 5455,
            currentBalance: 7854597,
            secondCurrency: 'DHC',
          },
        ],
      },
      {
        typeOfAccount: 'Saving Account',
        total: 10200,
        currency: 'USD',
        savingpaginationNumber: 1,
        accounts: [
          {
            accountNumber: '123456789123',
            accountName: 'current',
            availableBalance: 768,
            currentBalance: 4566,
            secondCurrency: 'DHC',
          },
          {
            accountNumber: '123456789123',
            accountName: 'Fresh USD',
            availableBalance: 7668,
            currentBalance: 54546,
            secondCurrency: 'DHC',
          },
        ],
      },
    ]);
  }
}

// options: {
//   headers?: HttpHeaders | {[header: string]: string | string[]},
//   observe?: 'body' | 'events' | 'response',
//   params?: HttpParams|{[param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>},
//   reportProgress?: boolean,
//   responseType?: 'arraybuffer'|'blob'|'json'|'text',
//   withCredentials?: boolean,
// }
