import { Component, OnInit } from '@angular/core';
import { MeetingsService } from 'src/app/services/meetings.service';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.css']
})
export class MeetingsComponent implements OnInit {

  public meetingList:any[] = [];
idx: any;
  constructor( private meetingsService: MeetingsService) { }

  ngOnInit(): void {
    this.meetingsService.getAll().subscribe((data:any) => {
      this.meetingList = data;
      console.log(data);
      
    })
  }

}
