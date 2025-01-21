import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

private apiUrl = 'http://localhost:8080/todos'

getData(): Promise<any>{
return fetch(this.apiUrl).then(res => res.json());

}

  constructor() { }
}
