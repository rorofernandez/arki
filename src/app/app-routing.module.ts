import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { ClientsComponent } from './components/clients/clients.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MeetingsComponent } from './components/meetings/meetings.component';

const routes: Routes = [
  {path:'dashboard', component: DashboardComponent },
  {path:'clients', component: ClientsComponent },
  {path:'meetings', component: MeetingsComponent },
  {path:'login', component: LoginComponent },
  /* {path:'', component: LoginComponent } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
