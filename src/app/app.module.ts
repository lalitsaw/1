import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// for ngmodel
import {FormsModule} from '@angular/forms';
// for RestAPI end-points consuming
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UsersComponent } from './users/users.component';
import { from } from 'rxjs';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    CustomerComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    UsersComponent
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
