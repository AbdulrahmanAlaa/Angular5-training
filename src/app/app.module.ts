import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './home/nav/nav.component';
import { UsersComponent } from './users/users.component';
import { CardComponent } from './users/card/card.component';


@NgModule({
  declarations: [AppComponent, HomeComponent, NavComponent, UsersComponent, CardComponent],
  // tslint:disable-next-line:whitespace
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
