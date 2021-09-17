import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dasboard1Component} from './allComponents/dasboard1/dasboard1.component'
import { Dasboard2Component } from './allComponents/dasboard2/dasboard2.component';
import { Dasboard3Component } from './allComponents/dasboard3/dasboard3.component';
import { LoginMainComponent } from './allComponents/login-main/login-main.component';

const routes: Routes = [
  { path : 'role1' , component: Dasboard1Component },
  { path : 'role2' , component: Dasboard2Component },
  { path : 'role3' , component: Dasboard3Component } ,
  { path : 'login' , component: LoginMainComponent } ,
  { path: '',  redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
