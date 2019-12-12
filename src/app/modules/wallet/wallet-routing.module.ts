import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent, LoginComponent } from './containers';
import { MenuComponent } from './components';
import { MainLayoutComponent } from '../../shared/layouts';
import { HeaderComponent } from '../../shared/containers';

const routes: Routes = [{
  path: '',
  component: MainLayoutComponent,
  children: [
  {
    path: 'main',
    children: [{
        path: '', component: HeaderComponent, outlet: 'header'
      }, {
        path: 'menu', component: MenuComponent, outlet: 'sidemenu',
      }, {
        path: '', component: MainComponent
      }
    ]
  }]
}, {
  path: '',
  component: MainLayoutComponent,
  children: [
  {
    path: 'login',
    children: [
      {
        path: '', component: LoginComponent
      }
    ]
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class WalletRoutingModule {}
