import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarNavComponent } from './side-bar-nav/side-bar-nav.component';
import { OverviewComponent } from './overview/overview.component';
import { AccountsComponent } from './accounts/accounts.component';
import { TransfersComponent } from './transfers/transfers.component';
import { StatementsComponent } from './statements/statements.component';
import { CardsComponent } from './cards/cards.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SideBarNavComponent,
    OverviewComponent,
    AccountsComponent,
    TransfersComponent,
    StatementsComponent,
    CardsComponent,
    TransactionsComponent,
    SettingsComponent,
    ProfileComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
