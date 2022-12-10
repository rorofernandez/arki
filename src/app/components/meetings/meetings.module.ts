import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetingsService } from 'src/app/services/meetings.service';
import { AddmeetingComponent } from './addmeeting/addmeeting.component';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule
  ],
  providers:[MeetingsService]
})
export class MeetingsModule { }