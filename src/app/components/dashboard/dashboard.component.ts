import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/services/clients.service';
import { MeetingsService } from 'src/app/services/meetings.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public dashList:any[] = [];


  constructor(private clientsService:ClientsService, private meetingsService:MeetingsService) { }
  /* constructor(private dashboardService:DashboardService) { } */

  ngOnInit(): void {
    this.clientsService.getAll().subscribe((data:any) => {
      this.dashList = data;
      console.log(data);
      
    })
  }

}
