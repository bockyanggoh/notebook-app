import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import {NotePageComponent} from '../page/note-page/note-page.component';
import {LoginPageComponent} from '../page/login-page/login-page.component';
import {ErrorPageComponent} from '../page/error-page/error-page.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent},
  { path: 'note', component: NotePageComponent },
  { path: 'error', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
