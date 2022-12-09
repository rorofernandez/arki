import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './clients.component';
import { MeetingsComponent } from '../meetings/meetings.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ClientsService } from 'src/app/services/clients.service';




@NgModule({
  declarations: [
    MeetingsComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[ClientsService]
})
export class ClientsModule { }