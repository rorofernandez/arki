import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  public clientList:any[] = [];
  public clientInfo:any;
  
  constructor(private clientsService: ClientsService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.clientsService.getAll().subscribe((data:any) => {
      this.clientList = data;
    })
  }

  openClientDialog(modelRef:any, clientObj = null) {
    console.log(clientObj);    
    this.modalService.open(modelRef);
    this.clientInfo = clientObj;
  }
  closeModel(modelRef:any) {
    this.modalService.dismissAll(modelRef);
  }

}
