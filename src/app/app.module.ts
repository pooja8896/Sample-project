import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AccountModule } from './account/account.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { DashboardModule } from './dashboard/dashboard.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccountModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    DashboardModule,
    HttpClientModule,
    BrowserAnimationsModule

  ],
  providers: [

  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
