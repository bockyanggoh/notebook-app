import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import {NotePageComponent} from '../page/note-page/note-page.component';
import {LoginPageComponent} from '../page/login-page/login-page.component';
import {ErrorPageComponent} from '../page/error-page/error-page.component';
import {AuthGuard} from '../guard/auth.guard';
import {FreeRoleGuard} from '../guard/free-role.guard';
import {AdminRoleGuard} from '../guard/admin-role.guard';
import {AdminPageComponent} from '../page/admin-page/admin-page.component';
import {LogoutPageComponent} from '../page/logout-page/logout-page.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent, canActivate: [AuthGuard]},
  { path: 'notes', component: NotePageComponent , canActivate: [FreeRoleGuard]},
  { path: 'notes/:id', component: NotePageComponent , canActivate: [FreeRoleGuard]},
  { path: 'admin', component: AdminPageComponent, canActivate: [AdminRoleGuard]},
  { path: 'logout', component: LogoutPageComponent, canActivate: [AuthGuard]},
  { path: 'error', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
