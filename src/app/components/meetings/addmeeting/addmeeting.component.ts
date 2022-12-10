import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-addmeeting',
  templateUrl: './addmeeting.component.html',
  styleUrls: ['./addmeeting.component.css']
})
export class AddmeetingComponent implements OnInit {

  addMeetingtBool: boolean = true;
  addMeetingForm:FormGroup = new FormGroup({});
  loader: boolean = false;
  tempFile: any;
  model: any;

  @Input() public meetingInfo:any;
  @Output() public closeModel: EventEmitter<void> = new EventEmitter<void>();

  constructor( private modalService: NgbModal, private fb:FormBuilder) { }

  ngOnInit(): void {
    if(this.meetingInfo) {
      this.initialForm(this.meetingInfo);
    } else{
      this.initialForm();
    }
  }
  initialForm(clientObj: any = null) {
    if (clientObj === null) {
      this.addMeetingForm = this.fb.group({
        topic: ["", Validators.required],
        date: ["", Validators.required],
        time: ["", Validators.required],
        participants: ["", Validators.required],
        clientId: [null],
        addedOn: []
      });
    } else {
      this.addMeetingForm = this.fb.group({
        topic: [clientObj.topic, Validators.required],
        date: [clientObj.date, Validators.required],
        time: [clientObj.time, Validators.required],
        participants: [clientObj.participants, Validators.required],
        clientId: [clientObj.clientId]
      });
    }
  }

  close() {
    this.closeModel.emit();
  }

}
