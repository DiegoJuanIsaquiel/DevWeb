import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddUsersComponent } from './add-users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [{ path: '', component: AddUsersComponent }];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    AddUsersComponent
  ],
  declarations: [
    AddUsersComponent
  ]
})
export class AddUsersModule { }
