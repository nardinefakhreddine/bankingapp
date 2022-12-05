import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { AccountsComponent } from './accounts/accounts.component';
import { TransfersComponent } from './transfers/transfers.component';
import { StatementsComponent } from './statements/statements.component';
import { CardsComponent } from './cards/cards.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';
const routes: Routes = [
  { path: 'overview', component: OverviewComponent },
  { path: 'accounts', component: AccountsComponent },
  { path: 'transfers', component: TransfersComponent },
  { path: 'statements', component: StatementsComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
