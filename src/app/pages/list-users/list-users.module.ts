import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListUsersComponent } from './list-users.component';

const routes: Routes = [{ path: '', component: ListUsersComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    ListUsersComponent
  ],
  declarations: [
    ListUsersComponent
  ]
})
export class ListUsersModule { }
