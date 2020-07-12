import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rankz';
  sideMenuList: MenuItem[] = [
    {
      hasSubMenu: false,
      icon: 'assets/images/dashboard.svg',
      name: 'Dashboard',
    },{
      hasSubMenu: true,
      icon: 'assets/images/site_exp.svg',
      name: 'Site Explorer',
    },{
      hasSubMenu: true,
      icon: 'assets/images/key_exp.svg',
      name: 'Keyword Explorer',
    },{
      hasSubMenu: false,
      icon: 'assets/images/rank_trc.svg',
      name: 'Rank Tracker',
    },{
      hasSubMenu: true,
      icon: 'assets/images/dist_con.svg',
      name: 'Distribute Content',
    },{
      hasSubMenu: true,
      icon: 'assets/images/ppc_exp.svg',
      name: 'PPC Explorer',
    },{
      hasSubMenu: true,
      icon: 'assets/images/others.svg',
      name: 'More Tools',
    },{
      hasSubMenu: false,
      icon: 'assets/images/integ.svg',
      name: 'Integrations',
    }
  ]
}

export interface MenuItem{
  name: string;
  hasSubMenu: boolean;
  icon: string;
}