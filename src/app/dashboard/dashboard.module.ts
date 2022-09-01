import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { GroupchatComponent } from './groupchat/groupchat.component';
import { ManageuserComponent } from './manageuser/manageuser.component';
import { ManagedocumentComponent } from './managedocument/managedocument.component';
import { LogoutComponent } from './logout/logout.component';
import { DashyhomeComponent } from './dashyhome/dashyhome.component';
import { DashComponent } from './dash/dash.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { HttpClientModule } from '@angular/common/http';
import { EmpListComponent } from './emp-list/emp-list.component';
import { AddItemComponent } from './add-item/add-item.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    GroupchatComponent,
    ManageuserComponent,
    ManagedocumentComponent,
    LogoutComponent,
    DashyhomeComponent,
    DashComponent,
    EditUserComponent,
    EmpListComponent,
    AddItemComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
  ],
  exports:[
    AddItemComponent
  ],
  entryComponents: [AddItemComponent]
})
export class DashboardModule { }
