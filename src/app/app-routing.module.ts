import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ReactiveFormsModule, FormsModule} from '@angular/forms';

const routes: Routes = [
  { path: '', redirectTo: 'account', pathMatch: 'full' },
  { path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),ReactiveFormsModule,FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
