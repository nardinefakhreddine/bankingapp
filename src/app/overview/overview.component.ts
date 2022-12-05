import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { ChangeDetectorRef } from '@angular/core';
import { accountBalance } from '../accounts.model';
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  startIndex = 0;
  currentpaginationNumber: number | undefined = 0;
  savingpaginationNumber: number | undefined = 0;
  accountsBalance: accountBalance[] | [] | undefined = undefined;
  isLoading = true;
  errorMsg = false;

  constructor(
    private accountService: AccountsService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.accountService.getAccounts().subscribe(
      (res) => {
        setTimeout(() => {
          this.isLoading = false;
          this.accountsBalance = res;
          if (this.accountsBalance) {
            for (var account of this.accountsBalance) {
              if (account.typeOfAccount == 'Current Account') {
                this.currentpaginationNumber = account.currentpaginationNumber;
              } else {
                this.savingpaginationNumber = account.savingpaginationNumber;
              }
            }
          }

          this.cd.detectChanges();
        }, 3000);
      },
      (error) => {
        this.accountsBalance = [];
        this.isLoading = false;
        this.errorMsg = true;
        this.cd.detectChanges();
      }
    );
  }

  loadCurrentMore() {
    if (this.currentpaginationNumber) {
      this.currentpaginationNumber =
        this.currentpaginationNumber + this.currentpaginationNumber;
    }
  }
  loadSavingMore() {
    if (this.savingpaginationNumber) {
      this.savingpaginationNumber =
        this.savingpaginationNumber + this.savingpaginationNumber;
    }
  }
  formatAccountNumber(accountNumber: string) {
    let ccnum = accountNumber;
    let ccnumspaced = ccnum.match(/.{1,3}/g)?.join(' ');
    return ccnumspaced;
  }
}
