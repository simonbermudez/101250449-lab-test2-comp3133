import { Injectable } from '@angular/core';
import { Mission } from '../models/mission';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor() {
  }

  getMissions(): Promise<Mission[]>{
    return fetch('https://api.spacexdata.com/v3/launches')
              .then(data => data.json())
  }
}
