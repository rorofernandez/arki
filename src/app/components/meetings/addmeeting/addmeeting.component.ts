import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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


  constructor( private modalService: NgbModal, private fb:FormBuilder) { }

  ngOnInit(): void {
  }

}
