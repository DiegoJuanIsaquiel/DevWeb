// #region Imports

/*
 * Pessoal, para manter um código limpo, favor manter esses comentários identificando as regions do código!
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { RouterModule, Routes } from '@angular/router';

// #endregion

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'home', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule) },
      { path: 'users/', loadChildren: () => import('./list-users/list-users.module').then((m) => m.ListUsersModule)},
      { path: 'users/create', loadChildren: () => import('./add-users/add-users.module').then((m) => m.AddUsersModule) },
      { path: '**', redirectTo: 'home' },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    PagesComponent
  ]
})
export class PagesModule { }
