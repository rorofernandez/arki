import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  public clientList:any[] = [];
  constructor(private clientsService: ClientsService) { }

  ngOnInit(): void {
    this.clientsService.getAll().subscribe((data:any) => {
      this.clientList = data;
    })

  }

}
