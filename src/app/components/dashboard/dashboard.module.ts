import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsService } from 'src/app/services/clients.service';
import { MeetingsService } from 'src/app/services/meetings.service';
import { ClientsComponent } from '../clients/clients.component';
import { MeetingsComponent } from '../meetings/meetings.component';




@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule
  ],
  providers:[ClientsService, MeetingsService]
})
export class DashboardModule { }