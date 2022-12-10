import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpClient: HttpClient) { }

  getAll(){
    return this.httpClient.get<any[]>('../../assets/json/client.json')
  }
  getOne(id:number){
    return this.httpClient.get<any[]>('../../assets/json/client.json')
  }
}
