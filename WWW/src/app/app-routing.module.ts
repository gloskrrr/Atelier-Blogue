import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsConnectedGuard } from './is-connected.guard';
import {LoginComponent} from "./login/login.component";
import { RegisterComponent } from './register/register.component';
import { UserEditComponent } from './user-edit/user-edit.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent},
  {path: 'register', component: RegisterComponent},

  /*
  {path: 'users', canActivate: [IsConnectedGuard], children : [
    {path: 'new'},
    {path: "edit"}
  ]},
  */
 {path: "user/edit/:id", component: UserEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
