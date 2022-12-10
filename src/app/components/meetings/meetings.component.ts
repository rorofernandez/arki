import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MeetingsService } from 'src/app/services/meetings.service';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.css']
})
export class MeetingsComponent implements OnInit {

  public meetingList:any[] = [];
  idx: any;
  public meetingInfo:any;

  constructor( private meetingsService: MeetingsService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.meetingsService.getAll().subscribe((data:any) => {
      this.meetingList = data;
      // console.log(data);
      
    })
  }
  openMeetingDialog(modelRef:any, clientObj = null) {
    // console.log(clientObj);    
    this.modalService.open(modelRef);
    this.meetingInfo = clientObj;
  }
  closeModel(modelRef:any) {
    this.modalService.dismissAll(modelRef);
  }


}
