import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar-nav',
  templateUrl: './side-bar-nav.component.html',
  styleUrls: ['./side-bar-nav.component.scss'],
})
export class SideBarNavComponent implements OnInit {
  constructor() {}
  navItems = [
    {
      order: 1,
      title: 'Overview',
      icon: 'bi bi-columns-gap',
      routename: '/overview',
    },
    {
      order: 2,
      title: 'Accounts',
      icon: 'bi bi-wallet2',
      routename: '/accounts',
    },
    {
      order: 3,
      title: 'Transfers',
      icon: 'bi bi-arrow-left-right',
      routename: '/transfers',
    },
    {
      order: 4,
      title: 'Statements',
      icon: 'bi bi-file-earmark-text',
      routename: '/statements',
    },
    {
      order: 5,
      title: 'Cards',
      icon: 'bi bi-credit-card',
      routename: '/cards',
    },
    {
      order: 6,
      title: 'Transactions',
      icon: 'bi bi-arrow-down-up',
      routename: '/transactions',
    },
  ];

  navSettings = [
    {
      order: 1,
      title: 'Settings',
      icon: 'bi bi-gear',
      routename: '/settings',
    },
    {
      order: 2,
      title: 'Profile',
      icon: 'bi bi-person-circle',
      routename: '/profile',
    },
    {
      order: 3,
      title: 'Log Out',
      icon: 'bi bi-box-arrow-left',
      routename: '/logout',
    },
  ];

  ngOnInit(): void {}
}
