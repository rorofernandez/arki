import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  @Input() public clientInfo:any;
  @Output()
  public closeModel: EventEmitter<void> = new EventEmitter<void>();

  constructor( private modalService: NgbModal, private fb:FormBuilder) { }

  ngOnInit(): void {
    if(this.clientInfo) {
      this.initialForm(this.clientInfo);
    } else{
      this.initialForm();
    }
   
  }

  initialForm(clientObj: any = null) {
    if (clientObj === null) {
      this.addClientForm = this.fb.group({
        firstName: ["", Validators.required],
        lastName: ["", Validators.required],
        email: ["", Validators.required],
        contact: ["", Validators.required],
        clientId: [null],
        addedOn: []
      });
    } else {
      this.addClientForm = this.fb.group({
        firstName: [clientObj.firstName, Validators.required],
        lastName: [clientObj.lastName, Validators.required],
        email: [clientObj.email, Validators.required],
        contact: [clientObj.contact, Validators.required],
        clientId: [clientObj.clientId]
      });
    }
  }

  close() {
    this.closeModel.emit();
  }
}
