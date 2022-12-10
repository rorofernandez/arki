import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.css']
})
export class AddclientComponent implements OnInit {

  addClientBool: boolean = true;
  addClientForm:FormGroup = new FormGroup({});
  loader: boolean = false;
  tempFile: any;


  constructor( private modalService: NgbModal, private fb:FormBuilder) { }

  ngOnInit(): void {
  }

}
