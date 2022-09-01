import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashyhomeComponent } from './dashyhome/dashyhome.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { GroupchatComponent } from './groupchat/groupchat.component';
import { LogoutComponent } from './logout/logout.component';
import { ManagedocumentComponent } from './managedocument/managedocument.component';
import { ManageuserComponent } from './manageuser/manageuser.component';

const routes: Routes = [{
  path: '',
  component:DashyhomeComponent,
  children:[
    {
      path: 'groupchat',
      component: GroupchatComponent,
    },
    {
      path: 'empList',
      component:EmpListComponent,
    },
    {
      path: 'manageuser',
      component:ManageuserComponent,
    },
    {
      path: 'managedocument',
      component:ManagedocumentComponent,
    },
    {
      path: 'logout',
      component:LogoutComponent,
    },
    {
      path: 'editUser',
                children: [{
                    path: ':id',  
                    pathMatch: 'full',
                    component: EditUserComponent
                }
                ]
      // path:'editUser/:id',
      //component:EditUserComponent,
    },
  ]
},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
