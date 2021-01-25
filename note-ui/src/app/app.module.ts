import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './page/login-page/login-page.component';
import { ErrorPageComponent } from './page/error-page/error-page.component';
import { NotePageComponent } from './page/note-page/note-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppRoutingModule} from './routing/routing.module';
import { AdminPageComponent } from './page/admin-page/admin-page.component';
import { LogoutPageComponent } from './page/logout-page/logout-page.component';
import {AuthModule} from '@auth0/auth0-angular';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ErrorPageComponent,
    NotePageComponent,
    AdminPageComponent,
    LogoutPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: '',
      clientId: ''
    }),
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
