import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeetingsService {

  constructor(private httpClient: HttpClient) { }

  getAll(){
    return this.httpClient.get<any[]>('../../assets/json/meetings.json')
  }
  getOne(id:number){
    return this.httpClient.get<any[]>('../../assets/json/meetings.json')
  }
}
